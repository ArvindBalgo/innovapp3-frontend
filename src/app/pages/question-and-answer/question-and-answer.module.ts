import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {QuestionAndAnswerComponent} from "./container/question-and-answer.component";
import {QuestionAndAnswerRoutingModule} from "./question-and-answer-routing.module";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    QuestionAndAnswerComponent
  ],
  imports: [
    CommonModule,
    QuestionAndAnswerRoutingModule,
    MatInputModule
  ],
  providers: [

  ],
})
export class QuestionAndAnswerModule {
}
