import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTemplateComponent } from './student-template.component';
import { StudentRoutingModule } from "./student-routing.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    StudentTemplateComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
