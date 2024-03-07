import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleImagesComponent } from './components/google-images/google-images.component';
import { LagnpatrikaComponent } from './components/lagnpatrika/lagnpatrika.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleImagesComponent,
    LagnpatrikaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
