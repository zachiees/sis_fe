import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {GradesComponent} from "./grades/grades.component";
import {SubjectsComponent} from "./subjects/subjects.component";


const studentRoutes:  Routes = [
{ path:'',
  component: HomeComponent
},{
  path:'grades',
  component: GradesComponent
},{
  path:'subjects',
  component: SubjectsComponent
},{
  path:'**',
  redirectTo: ''
}
];


@NgModule({
  declarations: [],
  imports: [CommonModule,
            RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
