import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './componentes/home-page/home-page.component';
import {LoginComponent} from './componentes/login/login.component';
import {RegistroComponent} from './componentes/registro/registro.component';
import {PrivadoComponent} from './componentes/privado/privado.component';
import {NotFoundComponent} from './componentes/not-found/not-found.component';
import {MiperfilComponent} from './componentes/miperfil/miperfil.component';
import {EmergenciasComponent} from './componentes/emergencias/emergencias.component';
import {IncendioComponent} from './componentes/incendio/incendio.component';
import {SaludComponent} from './componentes/salud/salud.component';
import {RoboComponent} from './componentes/robo/robo.component';

import {AuthGuard} from './guards/auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
  {path: '',component:HomePageComponent},
  {path: 'login',component: LoginComponent},
  {path: 'Registro',component:RegistroComponent},
  {path: 'privado',component: PrivadoComponent, canActivate: [AuthGuard]},
  {path: 'miperfil', component: MiperfilComponent},
  {path: 'emergencias', component: EmergenciasComponent},
  {path: 'incendio', component: IncendioComponent},
  {path: 'salud', component: SaludComponent},
  {path: 'robo',component: RoboComponent},
  {path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
