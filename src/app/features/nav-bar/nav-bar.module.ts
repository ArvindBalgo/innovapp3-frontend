import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NavBarComponent} from "./container/nav-bar/nav-bar.component";
import {NavBarMerchantComponent} from "./container/nav-bar-merchant/nav-bar-merchant.component";

@NgModule({
  declarations: [
    NavBarComponent,
    NavBarMerchantComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    NavBarMerchantComponent
  ],
  providers: [],
})

export class NavBarModule {

}
