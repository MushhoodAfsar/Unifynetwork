import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    Dashboard2Component,
    Dashboard3Component,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[MainComponent, DashboardComponent,Dashboard2Component,Dashboard3Component,FooterComponent]
})
export class HomeModule { }
