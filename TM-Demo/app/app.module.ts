import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllPackagesComponent } from './all-packages/all-packages.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPackagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
