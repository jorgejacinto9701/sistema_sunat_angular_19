import { NgModule } from '@angular/core';
import { TareaComponent } from './tarea/tarea.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { TareaCreateComponent } from './tarea-create/tarea-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { AppRoutingModule } from '../../app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    TareaComponent,
    TareaListComponent,
    TareaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    MessageModule,
    MessagesModule,
    TableModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule 
   
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class TareasModule { }
