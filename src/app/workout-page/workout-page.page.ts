import { Component, OnInit } from '@angular/core';
import {ModalController } from '@ionic/angular'
import { ExercisePage } from '../exercise/exercise.page';
import { Storage } from '@ionic/storage'
import { ActivatedRoute } from '@angular/router'
import { WorkoutService } from '../workout.service'
import { ExercisesService } from '../exercises.service';
import { SessionService } from '../session.service'

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.page.html',
  styleUrls: ['./workout-page.page.scss'],
})
export class WorkoutPagePage implements OnInit {

  // Initialises index number to keep track of user selected place in exercises array
  index: number;
  // Initialises current date
  date = new Date();
  dateFormatted = `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`
  workout;
  workouts;
  exercises;
  sessionExercises;
  session = []
  sessionHistory = []

  testEx;

  constructor(
    private modalController:ModalController, 
    private storage: Storage, private route: ActivatedRoute,
    private workoutService: WorkoutService,
    private exerciseService: ExercisesService,
    private sessionService: SessionService,
    ) { }

  async ngOnInit() {
    this.workouts = this.workoutService.getWorkouts()
    this.exercises = this.exerciseService.getExercises()
    this.sessionHistory = this.sessionService.getSessions()

    this.workout = await this.route.snapshot.paramMap.get('workout')
    // this.sessionHistory = await this.storage.get("sessionHistory")
    switch(this.workout){
      case 'Pull 1':
        this.sessionExercises = this.workouts[0].exercises
        break
      case 'Push 1':
        this.sessionExercises = this.workouts[1].exercises
        break
      case 'Legs 1':
        this.sessionExercises = this.workouts[2].exercises
        break
      case 'Pull 2':
        this.sessionExercises = this.workouts[3].exercises
        break
      case 'Push 2':
        this.sessionExercises = this.workouts[4].exercises
        break
      case 'Legs 2':
        this.sessionExercises = this.workouts[5].exercises
        break
    }
  }

/**
* Opens exercise modal and passes exercises and index data through using component props
* Params: i: number
*/
  async presentModal(i){
    const modal = await this.modalController.create({
    component: ExercisePage,
    componentProps: {exercise: this.sessionExercises[i], index: i}
  });

    modal.onDidDismiss()
    .then((retval) => {
      this.exercises.find(exercise => exercise.title === retval.data.title).repMax.push({date: this.dateFormatted, max: retval.data.repMax})
      this.session.push(retval.data)
    });

    return modal.present();
  }

/**
* Generates alert message when button to finish workout has been pressed
* Params:
*/
  logWorkout(){
    // this.saveSession()
    this.exerciseService.saveExercise(this.exercises)
    this.sessionService.saveSessions(this.session)
  }

  // async saveSession() {
  //   this.sessionHistory.push(this.session)
  //   this.sessionHistory = await this.storage.set('sessionHistory', this.sessionHistory)
  // }

  // async saveExercise() {
  //   this.exercises = await this.storage.set('exercises', this.exercises)
  // }

}
