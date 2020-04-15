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

  // Initialises array with numbers ranging to 30 - Used in view to simulate dummy data
  numbers = Array(30).fill(0).map((x,i)=>i);

  /**
  * Opens exercise instruction modal - passes nothing through using component props
  * Params:
  */
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
