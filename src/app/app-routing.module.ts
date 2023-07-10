import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import {StudentTemplateComponent} from "./pages/student/student-template.component";

const routes: Routes = [{
  path: 'template',
  component: TemplateComponent
},{
  path:'student',
  loadChildren: () => import('./pages/student/student.module').then(m=>m.StudentModule),
  component: StudentTemplateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
