import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { pedido } from '../models/pedido'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  API_URL = 'http://localhost:7000/api/bar'
  constructor( private http: HttpClient) { }

  getPedido(id : string){
    return this.http.get(`${this.API_URL}/pedido/${id}`)
  }

  savePedido(pedido: pedido){
    return this.http.post(`${this.API_URL}/pedido/add`,pedido)
  }

  getLast():Observable<pedido[]>{
    return this.http.get<pedido[]>(`${this.API_URL}/pedido/`)
  }
  
  
}