import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProjectsComponent} from "./container/projects.component";
import {ProjectsRoutingModule} from "./projects-routing.module";
import {CreateProjectComponent} from "./container/create-project/create-project.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ProjectsComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [

  ],
})
export class ProjectsModule {
}
