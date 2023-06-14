import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HTTPOPTIONS} from "../../../../shared/constant/http-options.constants";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html'
})
export class CreateProjectComponent implements OnInit {

  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {

  }

  postMe() {
    this._httpClient.post('https://mauriquotes-ai.herokuapp.com/' , 'Award ceremony for 400 people' ).subscribe((response: any) => {
      console.log('response');
    });
  }


}
