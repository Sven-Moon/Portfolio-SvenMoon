import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
