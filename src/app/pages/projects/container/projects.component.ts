import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  public projects: any;
  public list: any = [];
  private URL_BACKEND = 'https://mauriquotes-backend.herokuapp.com/';

  constructor(
    private _httpClient: HttpClient,
    private _router: Router
  ) { }

  ngOnInit(): void {

    const getUserToken = localStorage.getItem('token');

    this._httpClient.get(`${this.URL_BACKEND}api/quotes/my-project/${getUserToken}`).subscribe((response: any) => {
      response.data.forEach((project: any) => {
        console.log(project)
        this.list.push({
          descriptions: project.title,
          deadline: project.deadline,
          budget: project.budjet,
          bidders: project.bidders,
          eligibility: project.eligibility,
          status: 1
        })
      })
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

  public goToProjectDetails() {
    this._router.navigate(['/projects/'+55+'/project-detail']);
  }


  randomBids() {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
  }
}
