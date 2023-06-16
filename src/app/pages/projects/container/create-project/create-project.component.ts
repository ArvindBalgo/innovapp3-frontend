import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {animate, animateChild, query, stagger, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html'
})
export class CreateProjectComponent implements OnInit {

  public createForm: FormGroup;
  public projectList: any;

  public descValue = '';

  constructor(
    private _fb: FormBuilder,
    private _httpClient: HttpClient
  ) {
    this.createForm = this._fb.group({});
  }

  ngOnInit(): void {
    this.setUpCreateForm();
  }

  getItems(event: any) {
    const textValue = event.target.value;
    this._httpClient.post('https://mauriquotes-ai.herokuapp.com/ai/task-list' , {query: textValue} ).subscribe((response: any) => {
      this.projectList = response;
    });
  }

  selectedOption() {

  }

  setUpCreateForm() {
    this.createForm = this._fb.group({
      title: ['', ''],
      budget: ['', ''],
      deadline: ['', ''],
      description: ['', ''],
      response: ['', '']
    });
  }

  clearDescription() {
    this.createForm.get('description')?.setValue('');
    this.projectList = [];

  }

  onRequestQuote() {

    console.log('this.createForm.value', this.createForm.value);

  }



}
