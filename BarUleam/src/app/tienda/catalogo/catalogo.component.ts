import { Component, OnInit } from '@angular/core';
import { CategoriasServices } from '../../service/categoria.service';
import { ProductosService } from '../../service/producto.service';
import { CarritoService } from '../../service/carrito.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  categorias: any = [];
  productos: any = [];
  filtros: boolean = true;
  buscando: string = "";
  spin: boolean = true;

  constructor(
    private categoriasServices: CategoriasServices,
    private productoService: ProductosService,
    private carrito: CarritoService
  ) { }

  ngOnInit(): void {
    this.getCategorias()
    this.getProductos()
  }

  getCategorias() {
    this.categoriasServices.getCategoria().pipe(
      tap(res => (this.categorias = res))
    )
    .subscribe()
  }

  getProductos() {
    this.spin = true;
    this.productos = [];
    this.buscando = "";
    setTimeout(() => {                           //<<<---using ()=> syntax
      this.productoService.getProductos().pipe(
        tap(res => {
          this.productos = res
          console.log(this.productos)
        })
      ).subscribe();
      this.spin = false;
      this.buscando="Todos los productos"
    }, 1000)

  }
  cfiltros() {
    this.filtros = !this.filtros
  }

  getProductosc(text: string, id: string) {
    this.spin = true;
    this.productos = [];
    this.buscando = "";
    setTimeout(() => {                           //<<<---using ()=> syntax
      this.productoService.getProductosc(id)
        .subscribe(
          res => {
            this.productos = res;
            this.buscando = text;
            this.spin = false;
          },
          err => {
            console.log(err);
            this.spin = false;
          }
        )
    }, 1000);
  }
  //METODOS PARA EL CARRITO
  addProducto(producto: any) {
    this.carrito.addProducto(producto, 1)
  }
}
