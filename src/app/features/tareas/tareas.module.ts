import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea/tarea.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { TareaCreateComponent } from './tarea-create/tarea-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { LogoutComponent } from '../../shared/components/logout/logout.component';



@NgModule({
  declarations: [
    TareaComponent,
    TareaListComponent,
    TareaCreateComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[]
})
export class TareasModule { }
