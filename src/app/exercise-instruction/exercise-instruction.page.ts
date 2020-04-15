import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'

@Component({
  selector: 'app-exercise-instruction',
  templateUrl: './exercise-instruction.page.html',
  styleUrls: ['./exercise-instruction.page.scss'],
})
export class ExerciseInstructionPage implements OnInit {

  constructor(private navParams:NavParams, private modalController:ModalController) { }

  ngOnInit() {
  }

/**
* Closes modal and returns to previous page
* Params:
*/
  closeModal(){
    this.modalController.dismiss();
    }

}
