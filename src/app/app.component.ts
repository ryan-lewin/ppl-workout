import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { WorkoutService } from './workout.service'
import { ExercisesService } from './exercises.service'
import { SessionService } from './session.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private workoutService: WorkoutService,
    private exerciseService: ExercisesService,
    private sessionService: SessionService,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.workoutService.setWorkouts()
    this.exerciseService.setExercises()
    this.sessionService.setSessions()

    // if(await this.storage.get("workouts") == null) {
    //   let d = new Date()
    //   let date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
    //   await this.storage.set("workouts", 
    //     [
    //       {
    //         title: 'Pull 1', 
    //         lastCompleted: date,
    //         exercises: [
    //           {title: 'Deadlift', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Wide Grip Pulldowns', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Face Pulls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Hammer Curls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Dumbbell Curls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //         ],
    //         },
    //       {
    //         title: 'Push 1',
    //         lastCompleted: date, 
    //         exercises: [
    //           {title: 'Bench Press', sets: [{value: 0}, {value: 0}, {value: 0}], reps: 5},
    //           {title: 'Overhead Press', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Incline Dumbbell Press', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Triceps Pushdown', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Tricep Extensions', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //         ],
    //         },
    //       {
    //         title: 'Legs 1', 
    //         lastCompleted: date,
    //         exercises: [
    //           {title: 'Squat', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Romanian Deadlift', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Leg press', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Leg Curls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //           {title: 'Calf Raises', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
    //         ],
    //         },
    //     ])
    // }

    // if(await this.storage.get("exercises") == null) {
    //   let d = new Date()
    //   let date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
    //   await this.storage.set("exercises", 
    //   [
    //     {title: "Deadlift", repMax: [{date:date ,max: 150}]},
    //     {title: "Wide Grip Pulldowns", repMax: [{date:date ,max: 150}]},
    //     {title: "Face Pulls", repMax: [{date:date ,max: 150}]},
    //     {title: "Hammer Curls", repMax: [{date:date ,max: 150}]},
    //     {title: "Dumbbell Curls", repMax: [{date:date ,max: 150}]},
    //     {title: "Bench Press", repMax: [{date:date ,max: 150}]},
    //     {title: "Overhead Press", repMax: [{date:date ,max: 150}]},
    //     {title: "Incline Dumbbel Press", repMax: [{date:date ,max: 150}]},
    //     {title: "Triceps Pushdown", repMax: [{date:date ,max: 150}]},
    //     {title: "Tricep Extensions", repMax: [{date:date ,max: 150}]},
    //     {title: "Squat", repMax: [{date:date ,max: 150}]},
    //     {title: "Leg Press", repMax: [{date:date ,max: 150}]},
    //     {title: "Romanian Deadlift", repMax: [{date:date ,max: 150}]},
    //     {title: "Leg Curls", repMax: [{date:date ,max: 150}]},
    //     {title: "Calf Raises", repMax: [{date:date ,max: 150}]},
    //   ])
    // }

    if(await this.storage.get("sessionHistory") == null) {
      await this.storage.set("sessionHistory", [])
    }

  }
}
