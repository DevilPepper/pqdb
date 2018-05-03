import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { CompleteComponent } from './component/complete/complete.component';
import { IncompleteComponent } from './component/incomplete/incomplete.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'complete', component: CompleteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'incomplete', component: IncompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
