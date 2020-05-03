import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExerciseInstructionPageRoutingModule } from './exercise-instruction-routing.module';
import { ExerciseInstructionPage } from './exercise-instruction.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseInstructionPageRoutingModule,
    SharedModule,
  ],
  declarations: [ExerciseInstructionPage]
})
export class ExerciseInstructionPageModule {}
