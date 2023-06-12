import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService as AuthGuard} from './features/authentication/auth-guard.service';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: 'merchants',
    loadChildren: () => import('./pages/merchants/merchants.module').then(m => m.MerchantsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule),
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
