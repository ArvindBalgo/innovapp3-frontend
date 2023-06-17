import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import {ClientsRoutingModule} from "./clients-routing.module";



@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ClientsModule { }
