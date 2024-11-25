import { Component } from '@angular/core';
import { TareaService } from '../../../core/services/tarea.service';
import { Router, RouterModule } from '@angular/router';
import { Tarea } from '../../../core/models/tarea.model';
import { NgFor } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css',
  imports: [TableModule, ButtonModule, RouterModule]
  
})
export class TareaListComponent {

  tareas: Tarea[] = [];
  errorMessage: string | null = null;

  constructor(private tareaService: TareaService, private router: Router) {
    this.ngOnInit()
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
  }
}
