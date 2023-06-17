import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {QuestionAndAnswerComponent} from "./container/question-and-answer.component";
import {QuestionAndAnswerRoutingModule} from "./question-and-answer-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    QuestionAndAnswerComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    QuestionAndAnswerRoutingModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [

  ],
})
export class QuestionAndAnswerModule {
}
