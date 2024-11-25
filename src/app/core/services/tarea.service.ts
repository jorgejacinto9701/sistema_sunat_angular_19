import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../../app.settings';
import { Tarea } from '../models/dataCatalogo.model';


const baseUrlCrudDataCatalogo = AppSettings.API_ENDPOINT + '/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
 

  constructor(private http:HttpClient) { }

  
  registrarTarea(data:Tarea):Observable<any>{
    return this.http.post(baseUrlCrudDataCatalogo+"/registraTarea", data);
  }
  actualizarTarea(data:Tarea):Observable<any>{
    return this.http.put(baseUrlCrudDataCatalogo+"/actualizaTarea", data);
  }
  eliminarTarea(id:number):Observable<any>{
    return this.http.delete(baseUrlCrudDataCatalogo+"/eliminaTarea/"+id);
  }
  consultarTarea(filtro:string):Observable<any>{
    return this.http.get(baseUrlCrudDataCatalogo+"/listaTareaPorNombreLike/"+ filtro);
  }

  
}
