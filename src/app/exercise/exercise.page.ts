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

  exercises = []
  index: number;

  ngOnInit() {
    this.exercises = this.navParams.get('exercises')
    this.index = this.navParams.get('index')
  }

  closeModal(){
    this.exercises[this.index].complete = true
    this.modalController.dismiss();
    }

  addSet(){
    this.exercises[this.index].sets.push({number: this.exercises[this.index].sets.length + 1, weight: 0, reps: 0})
  }

  deleteSet(index) {
    if (confirm(`Are you sure you want to remove set ${this.exercises[this.index].sets.number } form your workout?`)) {
      this.exercises[this.index].sets.splice(index, 1);
    }
  }

}
