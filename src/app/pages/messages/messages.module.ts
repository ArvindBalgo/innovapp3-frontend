import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MessagesComponent} from "./container/messages/messages.component";
import {MessagesRoutingModule} from "./messages-routing.module";
import {ChatComponent} from "./container/ui/chat/chat.component";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    MessagesComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MatInputModule,
  ],
  providers: [

  ],
})
export class MessagesModule {
}
