import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { categoria } from '../models/categoria'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriasServices {

  API_URL = 'http://localhost:7000/api/bar'
  constructor( private http: HttpClient) { }

  getCategoria(){
    return this.http.get(`${this.API_URL}/categorias`)
  }

}