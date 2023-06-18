import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./container/projects.component";
import {CreateProjectComponent} from "./container/create-project/create-project.component";
import {ProjectDetailComponent} from "./container/project-detail/project-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
    children: [
      {
        path: '',
        component: ProjectDetailComponent,
      },
      {
        path: ':id/project-detail',
        component: ProjectDetailComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
