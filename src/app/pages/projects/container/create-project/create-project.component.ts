import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {animate, animateChild, query, stagger, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html'
})
export class CreateProjectComponent implements OnInit {

  public isLoading = false;

  public createForm: FormGroup;
  public projectList:  Array<{index: number;label: string; checked: boolean}> = [];
  private URL_BACKEND = 'https://mauriquotes-backend.herokuapp.com/';

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
    this.isLoading = true;
    this._httpClient.post('https://mauriquotes-ai.herokuapp.com/ai/task-list' , {query: textValue} ).subscribe((response: any) => {
      if (response) {
        this.isLoading = false;
      }
      response.forEach((task: string, index: number) => {
        this.projectList.push({
          index,
          label: task,
          checked: true
        });
      })
    });

    event.preventDefault();
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
    console.log(this.projectList.filter(item => item.checked));
    const filteredList = this.projectList.filter(item => item.checked).map(item => `<ai-info>${item.label}</ai-info>`);
    const specificDescription = this.createForm.value.description;
    const payload = {
      customer_id: 2,
      description: filteredList.join('') + `<perso-info>${specificDescription}</perso-info>`,
      budjet: this.createForm.value.budget,
      is_anonym: 1,
      is_ai: 1
    }

    const fm = new FormData();

    fm.append('customer_id', '2')
    fm.append('description',filteredList.join('') + `<perso-info>${specificDescription}</perso-info>`)
    fm.append('budjet',  this.createForm.value.budget)
    fm.append('is_anonym', '1')
    fm.append('is_ai', '1')
    fm.append('deadline', '22/02/2024');
    fm.append('title', this.createForm.value.title);
    console.log(this.createForm.value)


    this._httpClient.post(`${this.URL_BACKEND}api/quotes`, fm).subscribe(info => {
      console.log(info)
    })
  }

  toggleProject(project: {label: string; checked: boolean, index: number}) {
    this.projectList[project.index].checked = !this.projectList[project.index].checked;
  }
}
