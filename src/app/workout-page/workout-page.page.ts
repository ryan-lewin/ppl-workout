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

  exercises = [
    {name: 'Barbell Deadlift', sets: [{number: 1, weight: 0, reps: 0},{number: 2, weight: 0, reps: 0},{number: 3, weight: 0, reps: 0}], complete: false},
    {name: 'Wide Grip Lat Pulldown', sets: [{number: 1, weight: 0, reps: 0},{number: 2, weight: 0, reps: 0},{number: 3, weight: 0, reps: 0}], complete: false},
    {name: 'Cable Seated Row', sets: [{number: 1, weight: 0, reps: 0},{number: 2, weight: 0, reps: 0},{number: 3, weight: 0, reps: 0}], complete: false},
    {name: 'Dumbbell Hammer Curl', sets: [{number: 1, weight: 0, reps: 0},{number: 2, weight: 0, reps: 0},{number: 3, weight: 0, reps: 0}], complete: false},
    {name: 'Dumbbell Bicep Curl', sets: [{number: 1, weight: 0, reps: 0},{number: 2, weight: 0, reps: 0},{number: 3, weight: 0, reps: 0}], complete: false},
  ]

  index: number;

  ngOnInit() {
  }

    async presentModal(i){
      const modal = await this.modalController.create({
      component: ExercisePage,
      componentProps: {exercises: this.exercises, index: i}
    });

    modal.onDidDismiss()
    .then((retval) => {});

    return modal.present();
    }

    logWorkout(){
      alert('Workout has been logged')
    }

}
