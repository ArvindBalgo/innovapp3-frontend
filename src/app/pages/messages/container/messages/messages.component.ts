import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter} from "rxjs";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  public messages: any;
  public chat: any;

  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this._httpClient.get('/api/messages')
      .pipe(
        filter(response => !!response)
      )
      .subscribe((response: any) => {
      this.messages = response;
      if (this.messages) {
        this.chat = this.messages[0].chats;
      }

    });
  }

  selectMessage(index: number) {
    this.chat = this.messages[index].chats;
  }

}
