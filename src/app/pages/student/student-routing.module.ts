import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";


const studentRoutes:  Routes = [
{ path:'',
  component: HomeComponent
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
