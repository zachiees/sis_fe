import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


const studentRoutes:  Routes = [];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(studentRoutes)
  ]
})
export class StudentRoutingModule { }
