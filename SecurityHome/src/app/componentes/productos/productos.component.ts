import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../servicios/data-api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
public productos=[];
public producto='';
  ngOnInit() {
    this.dataApi.getProd().subscribe(productos=>{
      console.log('productos',productos);
      this.productos=productos;
    })
  }
}
