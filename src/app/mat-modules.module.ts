import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from "@angular/material/input";


const modules =[
  CommonModule,
  MatFormFieldModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MatModules { }
