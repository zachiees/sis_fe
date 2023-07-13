import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule} from "@angular/material/sidenav";


const modules =[
  CommonModule,
  MatFormFieldModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MatModules { }
