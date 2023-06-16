import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit, AfterViewInit {

  @Input('chat') chat : any;

  constructor(

  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('chat', this.chat);
    }, 500)

  }

}
