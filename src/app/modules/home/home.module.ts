import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    SideNavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideNavComponent,
    HomeComponent
  ]
})
export class HomeModule { }
