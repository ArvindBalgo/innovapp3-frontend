import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import {JobsRoutingModule} from "./jobs-routing.module";



@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class JobsModule { }
