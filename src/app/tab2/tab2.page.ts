import { Component } from '@angular/core';
import {ModalController } from '@ionic/angular'
import { ExerciseInstructionPage } from '../exercise-instruction/exercise-instruction.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private modalController:ModalController) {}

  numbers = Array(30).fill(0).map((x,i)=>i);

  async presentModal(){
    const modal = await this.modalController.create({
    component: ExerciseInstructionPage,
    componentProps: {}
    });

    modal.onDidDismiss()
    .then((retval) => {});

    return modal.present();
    }
}
