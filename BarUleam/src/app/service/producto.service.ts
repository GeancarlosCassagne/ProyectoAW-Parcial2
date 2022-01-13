import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { producto } from '../models/producto'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URL = 'http://localhost:7000/api/bar'
  constructor( private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URL}/productos`)
  }

  getProductosc(id : string){
    return this.http.get(`${this.API_URL}/productos/cat/${id}`)
  }
}
