import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './features/tareas/tarea/tarea.component';
import { Tarea } from './core/models/tarea.model';
import { TareaListComponent } from './features/tareas/tarea-list/tarea-list.component';
import { TareaCreateComponent } from './features/tareas/tarea-create/tarea-create.component';
import { AuthGuard } from './core/guardians/auth.guard';

const routes: Routes = [
  {
    path:'', redirectTo:'/tareas', pathMatch:'full'
  },
  {
    path:'tareas',
    component:TareaListComponent,
    children:[
      { path:'list', component:TareaListComponent },
      { path:'create', component:TareaCreateComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 




}
