import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PedidosComponent } from './login/pedidos/pedidos.component';
import { PerfilComponent } from './login/perfil/perfil.component';
import { RegisterComponent } from './login/register/register.component';
import { CarritoComponent } from './tienda/carrito/carrito.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/catalogo',
    pathMatch:'full'
  },

  {
    path:'catalogo',
    component: CatalogoComponent
  },
  {
    path:'carrito',
    component: CarritoComponent
  },

  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegisterComponent
  },
  {
    path:'perfil',
    component: PerfilComponent
  },
  {
    path:'pedidos',
    component: PedidosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
