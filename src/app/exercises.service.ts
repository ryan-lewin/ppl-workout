import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private storage: Storage) { }

  exercises: Array<object>;

  async setExercises() {
    if(await this.storage.get("exercises") == null) {
      let d = new Date()
      let date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
      await this.storage.set("exercises", 
      [
        {title: "Deadlift", repMax: [{date:date ,max: 150}]},
        {title: "Wide Grip Pulldowns", repMax: [{date:date ,max: 150}]},
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
    this.exercises = await this.storage.get("exercises")
  }

  getExercises() {
    return this.exercises
  }

  async saveExercise(data) {
    this.exercises = await this.storage.set('exercises', data)
  }

}

