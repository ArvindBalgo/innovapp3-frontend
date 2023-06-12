import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MerchantsComponent} from "./container/merchants.component";
import {MerchantsRoutingModule} from "./merchants-routing.module";

@NgModule({
  declarations: [
    MerchantsComponent
  ],
  imports: [
    CommonModule,
    MerchantsRoutingModule
  ],
  providers: [

  ],
})
export class MerchantsModule {
}
