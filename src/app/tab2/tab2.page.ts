import { Component } from '@angular/core';
import {ModalController } from '@ionic/angular'
import { ExerciseInstructionPage } from '../exercise-instruction/exercise-instruction.page';
import { ExercisesService } from '../exercises.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private modalController:ModalController,
    private exercisesService: ExercisesService
    ) {}

  // Initialises array with numbers ranging to 30 - Used in view to simulate dummy data
  numbers = Array(30).fill(0).map((x,i)=>i);
  exercises: Array<object>

  async ngOnInit() {
    this.exercises = this.exercisesService.getExercises()
    console.log(this.exercises)
  }

  /**
  * Opens exercise instruction modal - passes nothing through using component props
  * Params:
  */
  async presentModal(i){
    const modal = await this.modalController.create({
    component: ExerciseInstructionPage,
    componentProps: {exercise: this.exercises[i]}
    });

    modal.onDidDismiss()
    .then((retval) => {});

    return modal.present();
    }
}
