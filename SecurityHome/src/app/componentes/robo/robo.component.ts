import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../servicios/data-api.service';
@Component({
  selector: 'app-robo',
  templateUrl: './robo.component.html',
  styleUrls: ['./robo.component.css']
})
export class RoboComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public pedidos=[];
  public libro='';

  ngOnInit() {
    this.dataApi.getPedi().subscribe(pedidos=>{
      console.log("PEDIDOS",pedidos);
      this.pedidos=pedidos;
    })
  }
  onDelete(idProd:string): void{
    const confirmacion=confirm('¿Estas Seguro?');
     if(confirmacion){
       this.dataApi.deletePedi(idProd);
    }else{
    }
   }
}
