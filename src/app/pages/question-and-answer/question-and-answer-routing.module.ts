import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionAndAnswerComponent} from "./container/question-and-answer.component";

const routes: Routes = [
  {
    path: '',
    component: QuestionAndAnswerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionAndAnswerRoutingModule { }
