import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MerchantsComponent} from "./container/merchants.component";
import {MerchantProfileComponent} from "./container/merchant-profile/merchant-profile.component";

const routes: Routes = [
  {
    path: '',
    component: MerchantsComponent
  },
  {
    path: 'profile',
    component: MerchantProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantsRoutingModule { }
