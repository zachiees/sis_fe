import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import { MatMenuModule } from "@angular/material/menu";


const modules =[
  CommonModule,
  MatFormFieldModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatButtonModule,
  MatStepperModule,
  MatMenuModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MatModules { }
