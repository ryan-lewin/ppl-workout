import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { WorkoutService } from '../workout.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private storage: Storage, 
    private router: Router,
    private workoutService: WorkoutService
    ) {}

  workouts: Array<object>

  async ngOnInit() {
    this.workouts = this.workoutService.getWorkouts()
  }
}
