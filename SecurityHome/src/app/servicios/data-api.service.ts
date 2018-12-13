import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {ProductosInterface} from '../interfaces/productos';
import {PedidosInterface} from '../interfaces/pedidos';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private asf : AngularFirestore) { 
    this.productosCollection=asf.collection<ProductosInterface>('productos');
    this.productos=this.productosCollection.valueChanges();

    this.pedidosCollection=asf.collection<PedidosInterface>('pedidos');
    this.pedidos=this.pedidosCollection.valueChanges();
  }
  private productosCollection: AngularFirestoreCollection<ProductosInterface>;

  private pedidosCollection: AngularFirestoreCollection<PedidosInterface>;
  private pedidos: Observable<PedidosInterface[]>;

    private productos: Observable<ProductosInterface[]>;

    private Prod1: AngularFirestoreDocument<ProductosInterface>;
    private Ped1:AngularFirestoreDocument<PedidosInterface>;

    private prod: Observable<ProductosInterface>;

    private pedi: Observable<PedidosInterface>;

    public selectedPed: PedidosInterface={};
    public selectedProd:ProductosInterface= {
    
    };
    

getProd1(idProd: string){
this.Prod1=this.asf.doc<ProductosInterface>(`productos/${idProd}`);
return this.prod=this.Prod1.snapshotChanges().pipe(map(action=>{
  if(action.payload.exists==false){
    return null;
  }
  else{
    const data=action.payload.data() as ProductosInterface;
    data.id=action.payload.id;
    return data;
  }
}));
}

  getProd(){
    return this.productos=this.productosCollection.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map(action=>{
        const data = action.payload.doc.data() as ProductosInterface;
        data.id=action.payload.doc.id;
        return data;
      });
    }));
  }
  addProd(producto: ProductosInterface): void {
   this.productosCollection.add(producto);
  }

  addPedi(pedido: PedidosInterface): void {
    this.pedidosCollection.add(pedido);
   }
  updateProd(producto: ProductosInterface): void{
    let idProd=producto.id;
    this.Prod1=this.asf.doc<ProductosInterface>(`productos/${idProd}`);
    this.Prod1.update(producto);
  }
  deleteProd(idProd: string): void{
this.Prod1=this.asf.doc<ProductosInterface>(`productos/${idProd}`);
this.Prod1.delete();
  }
  deletePedi(idProd: string): void{
    this.Ped1=this.asf.doc<PedidosInterface>(`pedidos/${idProd}`);
    this.Ped1.delete();
      }

  
  getPedi(){
    return this.pedidos=this.pedidosCollection.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map(action=>{
        const data = action.payload.doc.data() as PedidosInterface;
        data.id=action.payload.doc.id;
        return data;
      });
    }));
  }

}
