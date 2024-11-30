import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TareaListComponent } from './tarea-list.component';
import { TareaService } from '../../../core/services/tarea.service';
import { Tarea } from '../../../core/models/tarea.model';
import { MaybeAsync } from '@angular/router';

describe('TareaListComponent', () => {
  let component: TareaListComponent;
  let fixture: ComponentFixture<TareaListComponent>;
  let tareas: Tarea[] = [{idTarea:1, descripcion:"Nueva tarea", estado: 0, fechaVigencia: new Date(), categoria: "CAT1", prioridad: "1"}];

  const myServiceSubject = new Subject<Tarea[]>();

  const myServiceMok = jasmine.createSpyObj('TareaService', tareas, {listaTarea: () => myServiceSubject.asObservable()}); // Indica qué función del servicio estoy ejecutando

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], 
      declarations: [TareaListComponent],
      providers: [
        {provide: TareaService, useValue: myServiceMok}
      ]
    }).compileComponents()
  }))

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TareaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
