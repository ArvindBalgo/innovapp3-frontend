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
    this._httpClient.get('/api/projects').subscribe((response: any) => {
      this.projects = response;
    })

    this._httpClient.get(`${this.URL_BACKEND}api/quotes`).subscribe((response: any) => {
      console.log(response.data, 'RESPONSE DATA');
      response.data.forEach((project: any) => {
        this.list.push({
          descriptions: project.description,
          deadline: "20/03/2023",
          budget: project.budjet,
          bidders: "10",
          status: 1
        })
      })

      console.log(this.list)
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

}
