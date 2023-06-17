import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-question-and-answer',
  templateUrl: './question-and-answer.component.html'
})
export class QuestionAndAnswerComponent implements OnInit {

  public merchants: any;

  public questionsList = [
    {
      initiator: 'ME',
      Message: 'What is the capital of Mauritius?',
      date: new Date()
    },
    {
      initiator: 'AI',
      Message: 'Port Louis is the capital of Mauritius?',
      date: new Date()
    },
    {
      initiator: 'ME',
      Message: 'Thanks, what is the capital of Rodrigues?',
      date: new Date()
    },
    {
      initiator: 'AI',
      Message: 'Port Mathurin',
      date: new Date()
    }
  ];

  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {

  }

  submitQuestion() {
    // const textValue = event.target.value;
    this._httpClient.post('https://mauriquotes-ai.herokuapp.com/ai/chat' , {query: 'kuma mo apeller'} ).subscribe((response: any) => {
      console.log('response', response);
    });
  }

}
