import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { detalle } from '../models/detalle'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallepedidoService {

  API_URL = 'http://localhost:7000/api/bar'
  constructor( private http: HttpClient) { }

  getDetalle(id : string){
    return this.http.get(`${this.API_URL}/detalle/${id}`)
  }
  
  saveDetalle(detalle: detalle){
    return this.http.post(`${this.API_URL}/detalle/add`,detalle)
  }
}