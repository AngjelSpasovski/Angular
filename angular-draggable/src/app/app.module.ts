import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularDraggableModule } from 'angular2-draggable';

import { DraggableDomElementComponent } from './draggable-dom-element/draggable-dom-element.component';
import { ResizeDomElementComponent } from './resize-dom-element/resize-dom-element.component';



@NgModule({
  declarations: [
    AppComponent,
    DraggableDomElementComponent,
    ResizeDomElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
