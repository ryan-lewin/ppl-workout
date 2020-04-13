import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  constructor(private navParams:NavParams, private modalController:ModalController) { }

  sets = [
    {number: 1, weight: 0, reps: 0},
    {number: 2, weight: 0, reps: 0},
    {number: 3, weight: 0, reps: 0}
  ]

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
    }

  addSet(){
    this.sets.push({number: this.sets.length + 1, weight: 0, reps: 0})
  }

}
