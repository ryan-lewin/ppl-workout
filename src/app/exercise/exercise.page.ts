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

  /**
  * Initialises exercises and index with values passed from workout-page
  * Params:
  */
  ngOnInit() {
    this.exercise = this.navParams.get('exercise')
    this.sets = this.exercise.sets
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
    this.exercise.sets = this.sets
    this.exercise.repMax = this.calculateMaxRep(this.sets)
    this.exercise.totalWeight = this.calculateTotalWeight(this.sets)
    this.modalController.dismiss(this.exercise);
    }

  /**
  * Adds new set to exercises global variable
  * Params:
  */
  addSet(){
    this.exercise.sets.push({value: 0, reps: 0})
  }

  /**
  * Deletes set from exercises global variable
  * Params:
  */
  deleteSet(index) {
    if (confirm(`Are you sure you want to remove set from your workout?`)) {
      this.exercise.sets.splice(index, 1);
    }
  }

}
