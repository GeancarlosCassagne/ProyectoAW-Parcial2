import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
//MODULO PARA EL FORMULARIO
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import { CarritoComponent } from './tienda/carrito/carrito.component';
import { PerfilComponent } from './login/perfil/perfil.component';
import { PedidosComponent } from './login/pedidos/pedidos.component';
import { DetallepedidoComponent } from './login/detallepedido/detallepedido.component';
import { NavbarComponent } from './tienda/navbar/navbar.component';
import { SpinnerComponent } from './tienda/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CatalogoComponent,
    CarritoComponent,
    PerfilComponent,
    PedidosComponent,
    DetallepedidoComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
