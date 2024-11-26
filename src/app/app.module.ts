import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { LogoutComponent } from './shared/components/logout/logout.component'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './environments/environment';
import { LoginComponent } from './shared/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    MessagesModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
