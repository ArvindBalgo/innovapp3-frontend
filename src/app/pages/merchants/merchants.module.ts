import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MerchantsComponent} from "./container/merchants.component";
import {MerchantsRoutingModule} from "./merchants-routing.module";
import { StarsComponent } from './ui/stars/stars.component';
import { MerchantProfileComponent } from './container/merchant-profile/merchant-profile.component';

@NgModule({
  declarations: [
    MerchantsComponent,
    StarsComponent,
    MerchantProfileComponent
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
