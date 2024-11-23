import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCatalogo } from '../models/dataCatalogo.model';
import { AppSettings } from '../../app.settings';


const baseUrlCrudDataCatalogo = AppSettings.API_ENDPOINT + '/crudDataCatalogo';

@Injectable({
  providedIn: 'root'
})
export class DataCatalogoService {
 

  constructor(private http:HttpClient) { }

  
  registrarCrud(data:DataCatalogo):Observable<any>{
    return this.http.post(baseUrlCrudDataCatalogo+"/registraDataCatalogo", data);
  }
  actualizarCrud(data:DataCatalogo):Observable<any>{
    return this.http.put(baseUrlCrudDataCatalogo+"/actualizaDataCatalogo", data);
  }
  eliminarCrud(id:number):Observable<any>{
    return this.http.delete(baseUrlCrudDataCatalogo+"/eliminaDataCatalogo/"+id);
  }
  consultarCrud(filtro:string):Observable<any>{
    return this.http.get(baseUrlCrudDataCatalogo+"/listaDataCatalogoPorNombreLike/"+ filtro);
  }

  
}
