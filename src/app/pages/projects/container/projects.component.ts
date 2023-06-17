import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  public projects: any;
  public list: any = [];
  private URL_BACKEND = 'https://mauriquotes-backend.herokuapp.com/';

  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this._httpClient.get(`${this.URL_BACKEND}api/quotes`).subscribe((response: any) => {
      console.log(response.data, 'RESPONSE DATA');
      response.data.forEach((project: any) => {
        this.list.push({
          descriptions: project.title,
          deadline: project.deadline,
          budget: project.budjet,
          bidders: project.bidders,
          status: 1
        })
      })
    })
    this.contestFunction();
  }

  mockData() {
    this._httpClient.get('/api/projects').subscribe((response: any) => {
      this.projects = response;
    })
  }

  getStatus(statuscode: number): string {
    switch (statuscode) {
      case 1:
        return 'In Progress'
      case 2:
        return 'Completed'
      case 3:
        return 'Expired'
      default:
        return 'In Progress'
    }
  }


  contestFunction() {
    console.log('test')
  }

}
