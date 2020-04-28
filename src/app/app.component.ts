import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

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
    private storage: Storage
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    if(await this.storage.get("workouts") == null) {
      let d = new Date()
      let date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
      date = 
      await this.storage.set("workouts", 
        [
          {
            title: 'Pull 1', 
            lastCompleted: date,
            exercises: [
              {title: 'Deadlift', sets: 3, reps: 5},
              {title: 'Wide Grip Pulldowns', sets: 3, reps: 12},
              {title: 'Face Pulls', sets: 3, reps: 12},
              {title: 'Hammer Curls', sets: 3, reps: 12},
              {title: 'Dumbbell Curls', sets: 3, reps: 12},
            ],
            },
          {
            title: 'Push 1',
            lastCompleted: date, 
            exercises: [
              {title: 'Bench Press', sets: 3, reps: 5},
              {title: 'Overhead Press', sets: 3, reps: 12},
              {title: 'Incline Dumbbell Press', sets: 3, reps: 12},
              {title: 'Triceps Pushdown', sets: 3, reps: 12},
              {title: 'Tricep Extensions', sets: 3, reps: 12},
            ],
            },
          {
            title: 'Legs 1', 
            lastCompleted: date,
            exercises: [
              {title: 'Squat', sets: 3, reps: 5},
              {title: 'Romanian Deadlift', sets: 3, reps: 12},
              {title: 'Leg press', sets: 3, reps: 12},
              {title: 'Leg Curls', sets: 3, reps: 12},
              {title: 'Calf Raises', sets: 3, reps: 12},
            ],
            },
        ])
    }

    if(await this.storage.get("exercises") != null) {
      let d = new Date()
      let date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
      await this.storage.set("exercises", 
      [
        {title: "Deadlift", repMax: [{date:date ,max: 150}]},
        {title: "Wide Grip Lat Pull Down", repMax: [{date:date ,max: 150}]},
        {title: "Face Pulls", repMax: [{date:date ,max: 150}]},
        {title: "Hammer Curls", repMax: [{date:date ,max: 150}]},
        {title: "Dumbbell Curls", repMax: [{date:date ,max: 150}]},
        {title: "Bench Press", repMax: [{date:date ,max: 150}]},
        {title: "Overhead Press", repMax: [{date:date ,max: 150}]},
        {title: "Incline Dumbbel Press", repMax: [{date:date ,max: 150}]},
        {title: "Triceps Pushdown", repMax: [{date:date ,max: 150}]},
        {title: "Tricep Extensions", repMax: [{date:date ,max: 150}]},
        {title: "Squat", repMax: [{date:date ,max: 150}]},
        {title: "Leg Press", repMax: [{date:date ,max: 150}]},
        {title: "Romanian Deadlift", repMax: [{date:date ,max: 150}]},
        {title: "Leg Curls", repMax: [{date:date ,max: 150}]},
        {title: "Calf Raises", repMax: [{date:date ,max: 150}]},
      ])
    }

  }
}
