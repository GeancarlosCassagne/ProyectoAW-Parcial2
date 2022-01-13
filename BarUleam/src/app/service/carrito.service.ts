import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }
  addProducto(producto: any, cant: number) {
    const infoProducto = producto;
    infoProducto.cantidad = cant;
    delete infoProducto.producto_caracteristicas
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS:any) {
      if (productoLS._id == infoProducto._id) {
        productosLS = productoLS._id;
      }
    })
    if (productosLS == infoProducto._id) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El producto ya se encuentra en el carrito!',
      })
    }
    else {
      this.insertarCarrito(infoProducto)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado correctamente',
        showConfirmButton: false,
        timer: 1000
      });
    }
  }

  insertarCarrito(producto:any) {
    this.guardarProductosLocalStorage(producto);
    //this.leerLocalStorage();
  }

  //Guardar productos en LOCALSTORAGE
  guardarProductosLocalStorage(producto:any) {
    let productos;
    productos = this.obtenerProductosLocalStorage();
    productos.push(producto);
    let now = Date.now();
    let expira = now + (3 * 60 * 60 * 1000);
    localStorage.setItem('hora', expira.toString());
    localStorage.setItem('productos', JSON.stringify(productos));
  }
  //LEER OBJETOS DEL LOCAL STORAGE
  obtenerProductosLocalStorage() {
    let productoLS:any;
    if (localStorage.getItem('productos') === null) {
      productoLS = [];
    }
    else {
      productoLS = localStorage.getItem('productos');
      //productoLS = JSON.stringify(productoLS);
      productoLS = JSON.parse(productoLS)
      console.log(productoLS)
    }
    return productoLS;
  }
  actualizarProducto(id: string, cant: number) {
    if (cant <= 0) {
      cant = 1;
    }
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS:any) {
      if (productoLS._id == id) {
        productoLS.cantidad = cant;
      }
    })
    localStorage.setItem('productos', JSON.stringify(productosLS));
  }

  eliminarProducto(id : string) {
    let productosLS:any;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS:any, index:number) {
        if (productoLS._id == id) {
            productosLS.splice(index, 1);
            console.log("yes");
        }
    });
    if(productosLS.length==0){
        this.vaciarLocalStorage();
    }
    else{
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }
  }

  vaciarLocalStorage() {
    localStorage.clear();
  }

  vaciarCarrito(){
    this.vaciarLocalStorage();
    /* Swal.fire({
      title: 'ESTAS SEGURO?',
      text: "Se eliminaran todos los productos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33 ',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        
        Swal.fire(
          'COMPLETADO!',
          'Se ha vaciado el carrito',
          'success'
        )
      }
    }) */
  }
  vaciarCarrito2(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Gracias Por Su Compra',
      showConfirmButton: false,
      timer: 1500
    })
    this.vaciarLocalStorage();
  }
}