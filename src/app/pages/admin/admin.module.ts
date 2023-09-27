import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template.component';
import {SharedComponentsModule} from "../../components/shared-components.module";
import {AdminRoutingModule} from "./admin-routing.module";



@NgModule({
  declarations: [
    AdminTemplateComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {

}
