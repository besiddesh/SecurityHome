import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Mensaje} from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';
import { reference } from '@angular/core/src/render3';


@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) { }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc').limit(5));
    return this.itemsCollection.valueChanges()

          .pipe(map((mensajes: Mensaje[]) => {
              console.log(mensajes);
                this.chats = [];
                for(let mensaje of mensajes){
                  this.chats.unshift(mensaje);   
                          }
                          return this.chats;
              //this.chats = mensajes;
          }))
  }
  agregarMensaje( texto: string,usercu){
          let mensaje: Mensaje ={
            nombre: usercu,
            mensaje: texto,
            fecha: new Date().getTime()

          }
        return this.itemsCollection.add(mensaje);
  }
}
