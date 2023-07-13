import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTemplateComponent } from './student-template.component';
import { StudentRoutingModule } from "./student-routing.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GradesComponent } from './grades/grades.component';
import { SubjectsComponent } from './subjects/subjects.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    StudentTemplateComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    GradesComponent,
    SubjectsComponent
  ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        MatSlideToggleModule
    ]
})
export class StudentModule { }
