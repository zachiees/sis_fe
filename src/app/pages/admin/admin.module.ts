import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template.component';
import {SharedComponentsModule} from "../../components/shared-components.module";
import {AdminRoutingModule} from "./admin-routing.module";
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import {MatModules} from "../../mat-modules.module";



@NgModule({
  declarations: [
    AdminTemplateComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    AdminRoutingModule,
    MatModules
  ]
})
export class AdminModule {

}
