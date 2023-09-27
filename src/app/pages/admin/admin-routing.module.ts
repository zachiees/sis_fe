import {RouterModule, Routes} from "@angular/router";
import {AdminTemplateComponent} from "./admin-template.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: AdminTemplateComponent
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule,
            RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule{}




