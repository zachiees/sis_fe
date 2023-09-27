import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import {StudentTemplateComponent} from "./pages/student/student-template.component";
import {AdminTemplateComponent} from "./pages/admin/admin-template.component";

const routes: Routes = [{
  path: 'template',
  component: TemplateComponent
},{
  path:'student',
  loadChildren: () => import('./pages/student/student.module').then(m=>m.StudentModule),
  component: StudentTemplateComponent
},{
  path:'admin',
  loadChildren: () => import('./pages/admin/admin.module').then(m=>m.AdminModule),
  component: AdminTemplateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
