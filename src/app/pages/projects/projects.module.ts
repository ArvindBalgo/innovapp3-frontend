import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProjectsComponent} from "./container/projects.component";
import {ProjectsRoutingModule} from "./projects-routing.module";
import {CreateProjectComponent} from "./container/create-project/create-project.component";

@NgModule({
  declarations: [
    ProjectsComponent,
    CreateProjectComponent
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
