import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html'
})
export class MerchantsComponent implements OnInit {

  public merchants: any;
  public list: any = [];
  private URL_BACKEND = 'https://mauriquotes-backend.herokuapp.com/';


  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this._httpClient.get('/api/merchants').subscribe((response: any) => {
      this.merchants = response;
    });

    this._httpClient.get(`${this.URL_BACKEND}api/merchants`).subscribe((response: any) => {
      response.data.forEach((project: any) => {
        this.list.push({
          id: project.id,
          brn: project.brn,
          description:  project.description,
          name: project.name,
          mcb_account: project.description,
          link: project.link,
          category_id:  project.category_id,
          contact_number: project.contact_number
        })
      })
    })

  }

}
