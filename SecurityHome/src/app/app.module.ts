import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {environment} from '../environments/environment';
import {AuthService} from './servicios/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { VecindariosComponent } from './componentes/vecindarios/vecindarios.component';
import { MiperfilComponent } from './componentes/miperfil/miperfil.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { EmergenciasComponent } from './componentes/emergencias/emergencias.component';
import { IncendioComponent } from './componentes/incendio/incendio.component';
import { SaludComponent } from './componentes/salud/salud.component';
import { RoboComponent } from './componentes/robo/robo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    LoginComponent,
    RegistroComponent,
    PrivadoComponent,
    NotFoundComponent,
    VecindariosComponent,
    MiperfilComponent,
    EmergenciasComponent,
    IncendioComponent,
    SaludComponent,
    RoboComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    AngularFireStorageModule
    
  ],
  providers: [AuthService, AuthGuard,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
