import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseInstructionPage } from './exercise-instruction.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseInstructionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseInstructionPageRoutingModule {}
