import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonServiceService } from './common-service.service';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  exports : [
    MaterialModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
