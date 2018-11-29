import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './componentes/home-page/home-page.component';
import {LoginComponent} from './componentes/login/login.component';
import {RegistroComponent} from './componentes/registro/registro.component';
import {PrivadoComponent} from './componentes/privado/privado.component';
import {NotFoundComponent} from './componentes/not-found/not-found.component';

const routes: Routes = [
  {path: '',component:HomePageComponent},
  {path: 'login',component: LoginComponent},
  {path: 'Registro',component:RegistroComponent},
  {path: 'privado',component: PrivadoComponent},
  {path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
