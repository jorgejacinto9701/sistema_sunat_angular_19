import { Component } from '@angular/core';
import { Tarea } from '../../../core/models/tarea.model';
import { TareaService } from '../../../core/services/tarea.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tarea-create',
  templateUrl: './tarea-create.component.html',
  styleUrl: './tarea-create.component.css',
  standalone: false
})
export class TareaCreateComponent {
  tareaForm: FormGroup;
  errorMessage: string | null = null;
 
  categoria: string[] = ['Personales', 'Laborales'];
  prioridad: string[] = ['Urgente', 'Alta' , 'Media', 'Baja'];

  constructor(private fb: FormBuilder, private tareaService: TareaService, private router: Router, private activatedRoute: ActivatedRoute) {
    console.log('TareaCreateComponent constructor');

    let id  = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('constructor >>> id:', id);
  

  

    this.tareaForm = this.fb.group({
      descripcion: ['', [Validators.required]],
      fechaVigencia: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      prioridad: ['', [Validators.required]]
    });
  }

  registra() {
    console.log('TareaCreateComponent registra');
    if (this.tareaForm.valid) {
      const { descripcion, fechaVigencia, categoria, prioridad } = this.tareaForm.value;
      try {
        console.log('Tarea:', descripcion, fechaVigencia, categoria, prioridad);

        let tarea = new Tarea();
        tarea.idTarea = 0;
        tarea.descripcion = descripcion;
        tarea.fechaVigencia = fechaVigencia
        tarea.categoria = categoria;
        tarea.prioridad = prioridad;
        tarea.estado = 1;

        this.tareaService.registrarTarea(tarea).subscribe({
          next: (data) => {
            console.log('Tarea registrada:', data);
            Swal.fire('Mensaje', 'Tarea creada:' + descripcion, 'info');
          },
          error: (error) => {
            this.errorMessage = 'Error al registrar la tarea. Intente de nuevo.';
            console.error('Error al registrar la tarea:', error);
            console.error( error);
        }});
        console.log('Tarea registrada exitosamente.');
        this.router.navigate(['/tareas/list']);
      } catch (error) {
        this.errorMessage = 'Error al iniciar sesión. Intente de nuevo.';
        console.error('Error al iniciar sesión:', error);
      }
    }
  }
}
