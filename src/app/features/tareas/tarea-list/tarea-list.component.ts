import { Component, NgModule } from '@angular/core';
import { TareaService } from '../../../core/services/tarea.service';
import { Router, RouterModule } from '@angular/router';
import { Tarea } from '../../../core/models/tarea.model';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css',
  standalone: false
})
export class TareaListComponent {

  tareas: Tarea[] = [];
  errorMessage: string | null = null;
  categoriaes!: any[];

  constructor(private tareaService: TareaService, private router: Router) {

  }

  ngOnInit() {
    this.tareaService.listaTarea("todos").subscribe({
      next: (data) => {
        this.tareas = data;
      },
      error: (err) => {
        this.errorMessage = 'No se pudieron cargar los productos.';
        console.error('Error al obtener productos:', err);
      }
    });

    this.categoriaes = [
      { label: 'Personales', value: 'Personales' },
      { label: 'Laborales', value: 'Laborales' }
  ];
  }

  crearTarea(){
    console.log('Crear tarea 1');
    this.router.navigate(['/tareas/create']);
    console.log('Crear tarea 2');
  }
  actualizaTarea(id: number){
    console.log('Actualiza tarea 1');
    this.router.navigate(['/tareas/update']);
    //this.router.navigate(['/tareas/update', id]);
    console.log('Actualiza tarea 2');
  }

  eliminaTarea(id: number) {
    console.log('Eliminar tarea:', id);

    Swal.fire({
      title: '¿Desea eliminar?',
      text: "Los cambios no se van a revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimina',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      console.log('Resultado:', result.isConfirmed);
      if (result.isConfirmed) {
            this.tareaService.eliminarTarea(id).subscribe({
              next: () => {
                this.tareas = this.tareas.filter(x => x.idTarea !== id);
                console.log('Tarea eliminada:', id);
                Swal.fire('Mensaje', 'Tarea eliminada:' + id, 'info');
              },
              error: (err) => {
                this.errorMessage = 'Error al eliminar el producto.';
                console.error('Error al eliminar producto:', err);
              }
            });
      }
    })   
  }

    
}
