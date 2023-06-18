import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      // console.log(params['id']) //log the value of id
    });
  }

}
