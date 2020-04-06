import { Component } from '@angular/core';
// import { WorkoutPageModule } from '../workout/workout.module'
import {ModalController } from '@ionic/angular'
import { WorkoutPage } from '../workout/workout.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController:ModalController) {}

  async presentModal(){
    const modal = await this.modalController.create({
    component: WorkoutPage,
    componentProps: {}
    });

    modal.onDidDismiss()
    .then((retval) => {});

    return modal.present();
    }

}
