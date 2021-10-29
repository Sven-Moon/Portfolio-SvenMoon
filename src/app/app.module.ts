import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app-root/app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainPanelComponent } from './shared/main-panel/main-panel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Project3Component } from './projects/project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPanelComponent,
    FooterComponent,
    HomeComponent,
    Project3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
