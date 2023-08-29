import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task } from './task.component';
import { FormsModule } from '@angular/forms';
import { Layout } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    Task,
    Layout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
