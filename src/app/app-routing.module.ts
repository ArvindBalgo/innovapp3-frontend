import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService as AuthGuard} from './features/authentication/auth-guard.service';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'merchants',
    loadChildren: () => import('./pages/merchants/merchants.module').then(m => m.MerchantsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'jobs',
    loadChildren: () => import('./pages/jobs/jobs.module').then(m => m.JobsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/clients.module').then(m => m.ClientsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'questionandanswer',
    loadChildren: () => import('./pages/question-and-answer/question-and-answer.module').then(m => m.QuestionAndAnswerModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'merchants',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'merchants',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
