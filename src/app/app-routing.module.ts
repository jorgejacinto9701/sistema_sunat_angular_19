import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './features/tareas/tarea/tarea.component';
import { Tarea } from './core/models/tarea.model';
import { TareaListComponent } from './features/tareas/tarea-list/tarea-list.component';
import { TareaCreateComponent } from './features/tareas/tarea-create/tarea-create.component';
import { AuthGuard } from './core/guardians/auth.guard';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoutComponent } from './shared/components/logout/logout.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/login', pathMatch:'full'
  },
  {
    path:'tareas',
    component:TareaListComponent,
    canActivate:[AuthGuard],
    children:[
      { path:'list', component:TareaListComponent },
      { path:'create', component:TareaCreateComponent }
    ]
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'logout',
    component:LogoutComponent,
    canActivate:[AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 




}
