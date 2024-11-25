import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
