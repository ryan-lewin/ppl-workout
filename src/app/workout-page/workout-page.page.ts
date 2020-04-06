import { Component, OnInit } from '@angular/core';
import { ExercisePageModule } from '../exercise/exercise.module'
import {ModalController } from '@ionic/angular'
import { ExercisePage } from '../exercise/exercise.page';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.page.html',
  styleUrls: ['./workout-page.page.scss'],
})
export class WorkoutPagePage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

    async presentModal(){
    const modal = await this.modalController.create({
    component: ExercisePage,
    componentProps: {}
    });

    modal.onDidDismiss()
    .then((retval) => {});

    return modal.present();
    }

}
