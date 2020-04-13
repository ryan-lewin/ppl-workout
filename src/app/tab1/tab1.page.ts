import { Component } from '@angular/core';
// import { WorkoutPageModule } from '../workout/workout.module'
// import {ModalController } from '@ionic/angular'
// import { WorkoutPage } from '../workout/workout.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  workouts = [
    {workout: 'Push 1', date: '01/01/2020'},
    {workout: 'Pull 1', date: '01/01/2020'},
    {workout: 'Legs 1', date: '01/01/2020'},
    {workout: 'Push 2', date: '01/01/2020'},
    {workout: 'Pull 2', date: '01/01/2020'},
    {workout: 'Legs 2', date: '01/01/2020'},
  ]

}
