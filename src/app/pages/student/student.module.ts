import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTemplateComponent } from './student-template.component';
import { StudentRoutingModule } from "./student-routing.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GradesComponent } from './grades/grades.component';
import { SubjectsComponent } from './subjects/subjects.component';
import {MatModules} from "../../mat-modules.module";
import { CarouselComponent } from './home/carousel/carousel.component';


@NgModule({
  declarations: [
    StudentTemplateComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    GradesComponent,
    SubjectsComponent,
    CarouselComponent
  ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        MatModules
    ]
})
export class StudentModule { }
