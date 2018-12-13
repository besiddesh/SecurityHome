import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../servicios/data-api.service';
import {ProductosInterface} from '../../interfaces/productos';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {

  constructor(
private dataApi: DataApiService) { }
private productos:ProductosInterface[];
  ngOnInit() {
    this.getListProd();
  }
  getListProd(){
    this.dataApi.getProd().subscribe(productos=>{
      this.productos=productos;
    })
  }

  onDelete(idProd:string): void{
   const confirmacion=confirm('¿Estas Seguro?');
    if(confirmacion){
      this.dataApi.deleteProd(idProd);
   }else{
   }
  }

  onPreUpdateProd(producto: ProductosInterface){
    console.log("PROD", producto);
    this.dataApi.selectedProd=Object.assign({},producto);
  }


}
