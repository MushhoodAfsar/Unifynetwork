import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ServicesModule } from './services/services.module';
import { AboutModule } from './about/about.module';
import { BrowserAnimationsModule,provideAnimations } from '@angular/platform-browser/animations';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import {AnimateModule} from 'primeng/animate';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    ServicesModule,
    AboutModule,
    SharedModule,
    AnimateOnScrollModule,
    AnimateModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
