import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../servicios/chat.service';
import {UserInterface} from '../../interfaces/user';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {
    mensaje: string = "";
    elemento: any;

  constructor(public _cs: ChatService, public as: AuthService) { 
    this._cs.cargarMensajes()
    .subscribe(()=>{

      setTimeout(()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },20);
      
    });
    }
    user: UserInterface={
      name: '',
      email: '',
      photourl: ''
    };
    ngOnInit(){
      this.elemento = document.getElementById('app-mensajes');
      this.as.getAuth().subscribe(user=>{
        if(user){
          this.user.name=user.displayName;
          this.user.email=user.email;
        }
      })
    }
  
  enviar_mensaje(){
    console.log( this.mensaje );

    if(this.mensaje.length === 0){
      return;
    }
    this._cs.agregarMensaje(this.mensaje,this.user.email)
        .then( () =>this.mensaje="")
        .catch( (err) => console.error('Error al enviar',err));       
  }
}