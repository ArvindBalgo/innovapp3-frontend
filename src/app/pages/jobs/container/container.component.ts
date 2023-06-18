import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  public projects: any;

  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this._httpClient.get('/api/jobs').subscribe((response: any) => {
      this.projects = response;

      console.log('this.projects', this.projects);
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
