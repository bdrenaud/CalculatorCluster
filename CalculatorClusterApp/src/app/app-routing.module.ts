import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubicFtCalComponent } from './cubic-ft-cal/cubic-ft-cal.component';
import { SquareFtCalComponent } from './square-ft-cal/square-ft-cal.component';

const routes: Routes = [
  {path: '', component:SquareFtCalComponent},
  {path: 'cubic', component:CubicFtCalComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
