import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'challenge', component: Challenge2Component },
  { path: 'challenge3', component: Challenge3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

