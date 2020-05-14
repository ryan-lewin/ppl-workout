import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private storage: Storage) { }

  //Sets workout routine data - data is static
  workouts = [
    {
      title: 'Pull 1', 
      lastCompleted: '2020-05-10',
      exercises: [
        {title: 'Deadlift', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Wide Grip Pulldowns', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Face Pulls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Hammer Curls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Dumbbell Curls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
      ],
      },
    {
      title: 'Push 1',
      lastCompleted: '2020-05-10', 
      exercises: [
        {title: 'Bench Press', sets: [{value: 0}, {value: 0}, {value: 0}], reps: 5},
        {title: 'Overhead Press', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Incline Dumbbell Press', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Triceps Pushdown', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Tricep Extensions', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
      ],
      },
    {
      title: 'Legs 1', 
      lastCompleted: '2020-05-10',
      exercises: [
        {title: 'Squat', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Romanian Deadlift', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Leg Press', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Leg Curls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Calf Raises', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
      ],
      },      
      {title: 'Pull 2', 
      lastCompleted: '2020-05-10',
      exercises: [
        {title: 'Romanian Deadlift', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Wide Grip Pulldowns', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Face Pulls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Hammer Curls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Dumbbell Curls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
      ],
      },
    {
      title: 'Push 2',
      lastCompleted: '2020-05-10', 
      exercises: [
        {title: 'Overhead Press', sets: [{value: 0}, {value: 0}, {value: 0}], reps: 5},
        {title: 'Bench Press', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Incline Dumbbell Press', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Triceps Pushdown', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Tricep Extensions', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
      ],
      },
    {
      title: 'Legs 2', 
      lastCompleted: '2020-05-10',
      exercises: [
        {title: 'Squat', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Romanian Deadlift', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Leg Press', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Leg Curls', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
        {title: 'Calf Raises', sets: [{value: 0, reps: 0}, {value: 0, reps: 0}, {value: 0, reps: 0}], repMax: 0, totalWeight: 0},
      ],
      },
      
  ]

  //Returns workout routine data when called
  getWorkouts() {
    return this.workouts
  }



}
