import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';
import { detalle } from '../../models/detalle';
import { pedido } from '../../models/pedido';
import { PedidoService } from '../../service/pedido.service'
import { DetallepedidoService } from '../../service/detallepedido.service'
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  detalle:detalle={
    id:"",
    _pedido:"",
    _producto:"",
    cantidad:0,
    total:0,
  }

  listlast: any = [];

  pedido:pedido={
    id: 0,
    _usuario: "61db85084da6123254e56abe",
    total:0
  }
  fac_id:any;
  productos:any=[];
  total:number=0;

  constructor(
    private carrito:CarritoService,
    private pedidoService:PedidoService,
    private detallePedidoService:DetallepedidoService
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }


  getProductos(){
    this.productos=this.carrito.obtenerProductosLocalStorage();
    this.getTotal();
  }

  getTotal(){
    this.total=0;
    for (let producto of this.productos){
      this.total+=producto.precio*producto.cantidad;
    }
    this.total=Number(this.total.toFixed(2));
  }

  actualizar(id:string,cant:number){
    this.carrito.actualizarProducto(id,cant);
    this.getProductos();
    this.getTotal();
  }

  eliminar(id:string){
    this.carrito.eliminarProducto(id);
    this.getProductos();
    this.getTotal();
  }
  vaciar(){
    this.carrito.vaciarCarrito();
    this.getProductos();
    this.getTotal();
  }

  comprar(){
    this.pedido.total=this.total;
    delete this.pedido.id;
    this.pedidoService.savePedido(this.pedido).pipe(
      tap(res => (this.getLast()))
    ).subscribe()

  }
  getLast(){
    this.pedidoService.getLast().pipe(
      tap(res => {
        this.listlast=res;
        this.fac_id=this.listlast[0]._id;
        this.detalle._pedido=this.fac_id;
        this.Detalles();
      })
      ).subscribe()
      /* res=>{
        this.detalle.detalle_factura_id=res[0]._id;
        console.log(this.fac_id);
        this.Detalles();
      },
      err => console.error(err) */
    
  }

  Detalles(){
    delete this.detalle.id;
    this.carrito.vaciarCarrito2();
    for(let producto of this.productos){
      this.detalle._producto=producto._id;
      this.detalle.cantidad=producto.cantidad;
      this.detalle.total=producto.precio*producto.cantidad
      this.insertarDetalles();
    }
    this.getProductos();
  }

  insertarDetalles(){
    this.detallePedidoService.saveDetalle(this.detalle).pipe(
      tap(res=>(console.log("yeih")))
    ).subscribe()
      /* res=>{
        console.log("yeih")
      },
      err=>console.log(err)
    ) */
  }
}
