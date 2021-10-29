import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Project1Component } from './projects/project1/project1.component';
import { Project2Component } from './projects/project2/project2.component';
import { Project3Component } from './projects/project3/project3.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project-1', component: Project1Component },
  { path: 'project-2', component: Project2Component },
  { path: 'project-3', component: Project3Component },
  { path: '', redirectTo: "home", pathMatch: "full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
