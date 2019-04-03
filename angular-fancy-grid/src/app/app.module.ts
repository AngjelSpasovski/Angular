import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FancyGridModule } from 'fancy-grid-angular';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FancyGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
