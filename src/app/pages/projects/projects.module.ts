import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProjectsComponent} from "./container/projects.component";
import {ProjectsRoutingModule} from "./projects-routing.module";

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  providers: [

  ],
})
export class ProjectsModule {
}
