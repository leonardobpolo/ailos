import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewAdmissionComponent } from './modules/new-admission/new-admission.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/new-admission',
    pathMatch: 'full'
  },
  {
    path: 'new-admission',
    component: NewAdmissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
