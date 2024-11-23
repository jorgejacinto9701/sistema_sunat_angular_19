import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogo } from '../models/catalogo.model';
import { AppSettings } from '../../app.settings';


const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http:HttpClient) { }

  listaCatalogo(): Observable<Catalogo[]> {
    return this.http.get<Catalogo[]>(baseUrlUtil+"/listCatalogo");
  }

}


