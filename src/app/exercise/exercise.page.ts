import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'
import { VirtualTimeScheduler } from 'rxjs';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  constructor(private navParams:NavParams, private modalController:ModalController, private storage: Storage) { }

  //Initialises empty array that will take the exercises array passed from previous page
  exercise;
  sets = [];
  num = 0;
  //Initialises empty number var that will take the index var passed from previous page
  // index;

  /**
  * Initialises exercises and index with values passed from workout-page
  * Params:
  */
  ngOnInit() {
    this.exercise = this.navParams.get('exercise')
    this.sets = this.exercise.sets
    // this.index = this.navParams.get('index')
    console.log(this.exercise)
  }

  /**
  * Calculate and return the max rep according to the the weight lifted in the set
  * Params: sets: array
  */
  calculateMaxRep(sets){
    let highest: number = 0;
    sets.forEach(element => {
      if(element.value > highest) {highest = element.value}
    });
    return Math.round((highest*1.1307) + 0.6998)
  }

  /**
  * Calculate and return the total weight lifted in the set
  * Params: sets: array
  */
  calculateTotalWeight(sets){
    let sum: number = 0;
    sets.forEach(element => {
      sum += element.value * element.reps
    });
    return sum
  }

  /**
  * Trigger funcs to update return data and close modal
  * Params:
  */
  closeModal(){
    // console.log(this.exercise)
    // console.log(this.exercise.maxRep = this.calculateMaxRep(this.sets))
    // console.log(this.calculateTotalWeight(this.sets))
    this.exercise.sets = this.sets
    this.exercise.maxRep = this.exercise.maxRep = this.calculateMaxRep(this.sets)
    this.exercise.totalWeight = this.calculateTotalWeight(this.sets)
    console.log(this.exercise)
    this.modalController.dismiss(this.exercise);
    }

  /**
  * Adds new set to exercises global variable
  * Params:
  */
  addSet(){
    this.exercise.sets.push({value: 0, reps: 0})
    console.log(this.exercise)
  }

  /**
  * Deletes set from exercises global variable
  * Params:
  */
  deleteSet(index) {
    if (confirm(`Are you sure you want to remove set ${this.exercise.sets[index]} form your workout?`)) {
      this.exercise.sets.splice(index, 1);
    }
  }

}
