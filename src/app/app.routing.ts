import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { Project1Component } from './projects/project1/project1.component';

const routes: Routes = [
  { path: 'home', component: AboutComponent },
  { path: 'project-1', component: Project1Component },
  // { path: 'project-2',  },
  // { path: 'project-3',  },
  { path: '', redirectTo: "home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
