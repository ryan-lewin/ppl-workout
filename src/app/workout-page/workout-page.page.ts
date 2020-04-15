import { Component, OnInit } from '@angular/core';
import {ModalController } from '@ionic/angular'
import { ExercisePage } from '../exercise/exercise.page';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.page.html',
  styleUrls: ['./workout-page.page.scss'],
})
export class WorkoutPagePage implements OnInit {

  constructor(private modalController:ModalController) { }

  // Initialises array of dummy data to be used in the view in place of DB
  exercises = [
    {name: 'Barbell Deadlift', sets: [{number: 1, weight: 0, reps: 0},{number: 2, weight: 0, reps: 0},{number: 3, weight: 0, reps: 0}], complete: false, totalWeight: 0, maxRep: 0},
    {name: 'Wide Grip Lat Pulldown', sets: [{number: 1, weight: 0, reps: 0},{number: 2, weight: 0, reps: 0},{number: 3, weight: 0, reps: 0}], complete: false, totalWeight: 0, maxRep: 0},
    {name: 'Cable Seated Row', sets: [{number: 1, weight: 0, reps: 0},{number: 2, weight: 0, reps: 0},{number: 3, weight: 0, reps: 0}], complete: false, totalWeight: 0, maxRep: 0},
    {name: 'Dumbbell Hammer Curl', sets: [{number: 1, weight: 0, reps: 0},{number: 2, weight: 0, reps: 0},{number: 3, weight: 0, reps: 0}], complete: false, totalWeight: 0, maxRep: 0},
    {name: 'Dumbbell Bicep Curl', sets: [{number: 1, weight: 0, reps: 0},{number: 2, weight: 0, reps: 0},{number: 3, weight: 0, reps: 0}], complete: false, totalWeight: 0, maxRep: 0},
  ]

  // Initialises index number to keep track of user selected place in exercises array
  index: number;
  // Initialises current date
  date = new Date();


  ngOnInit() {
  }

/**
* Opens exercise modal and passes exercises and index data through using component props
* Params: i: number
*/
  async presentModal(i){
    const modal = await this.modalController.create({
    component: ExercisePage,
    componentProps: {exercises: this.exercises, index: i}
  });

    modal.onDidDismiss()
    .then((retval) => {});

    return modal.present();
  }

/**
* Generates alert message when button to finish workout has been pressed
* Params:
*/
  logWorkout(){
    alert('Workout has been logged')
  }

}
