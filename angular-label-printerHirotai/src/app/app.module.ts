import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelGrid47x10v001Component } from './label-grid47x10v001/label-grid47x10v001.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelGrid47x10v001Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
