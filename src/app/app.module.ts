import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Nav-bar/Nav-bar.component';
import { ProjectCardComponent } from './Project/Project-card/Project-card.component';
import { ProjectListComponent } from './Project/Project-list/Project-list.component';

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      ProjectCardComponent,
      ProjectListComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
