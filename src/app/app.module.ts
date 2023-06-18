import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserService} from "./shared/services/user.service";
import {AuthGuardService} from "./features/authentication/auth-guard.service";
import {AuthService} from "./features/authentication/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {NavBarModule} from "./features/nav-bar/nav-bar.module";
import {HeaderModule} from "./features/header/header.module";
import {NavBarService} from "./features/nav-bar/container/services/nav-bar.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    NavBarModule,
    HeaderModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    UserService,
    NavBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
