import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../servicios/data-api.service';
import {ProductosInterface} from '../../interfaces/productos';
import {ActivatedRoute, Params} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-buy-producto',
  templateUrl: './buy-producto.component.html',
  styleUrls: ['./buy-producto.component.css']
})
export class BuyProductoComponent implements OnInit {

  constructor(private dataApi: DataApiService,
    private route: ActivatedRoute) { }
  public producto: ProductosInterface={};
  ngOnInit() {
    const idProd=this.route.snapshot.params['id'];
    this.dataApi.getProd1(idProd).subscribe(producto =>{
this.producto=producto;
    });
  }
  onSavepedi(formped: NgForm):void {
    console.log(formped.value);
    this.dataApi.addPedi(formped.value);
  }
}
