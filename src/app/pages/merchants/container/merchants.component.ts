import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html'
})
export class MerchantsComponent implements OnInit {

  public merchants: any;

  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this._httpClient.get('/api/merchants').subscribe((response: any) => {
      this.merchants = response;
      // console.log('this.merchants', this.merchants);
    })
  }

}
