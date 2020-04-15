import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  constructor(private navParams:NavParams, private modalController:ModalController) { }

  //Initialises empty array that will take the exercises array passed from previous page
  exercises = []
  //Initialises empty number var that will take the index var passed from previous page
  index: number;

  /**
  * Initialises exercises and index with values passed from workout-page
  * Params:
  */
  ngOnInit() {
    this.exercises = this.navParams.get('exercises')
    this.index = this.navParams.get('index')
  }

  /**
  * Calculate and return the max rep according to the the weight lifted in the set
  * Params: sets: array
  */
  calculateMaxRep(sets){
    let highest: number = 0;
    sets.forEach(element => {
      if(element.weight > highest) {highest = element.weight}
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
      sum += element.weight * element.reps
    });
    return sum
  }

  /**
  * Trigger funcs to update return data and close modal
  * Params:
  */
  closeModal(){
    this.exercises[this.index].maxRep = this.calculateMaxRep(this.exercises[this.index].sets)
    this.exercises[this.index].totalWeight = this.calculateTotalWeight(this.exercises[this.index].sets)
    this.exercises[this.index].complete = true
    this.modalController.dismiss();
    }

  /**
  * Adds new set to exercises global variable
  * Params:
  */
  addSet(){
    this.exercises[this.index].sets.push({number: this.exercises[this.index].sets.length + 1, weight: 0, reps: 0})
  }

  /**
  * Deletes set from exercises global variable
  * Params:
  */
  deleteSet(index) {
    if (confirm(`Are you sure you want to remove set ${this.exercises[this.index].sets.number } form your workout?`)) {
      this.exercises[this.index].sets.splice(index, 1);
    }
  }

}
