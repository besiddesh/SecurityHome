import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../servicios/data-api.service';
import {ProductosInterface} from '../../interfaces/productos';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi:DataApiService) { }

  ngOnInit() {
  }
  onSaveprod(formprod: NgForm):void {
    
    console.log("IDFORM",formprod.value.id);
    this.dataApi.addProd(formprod.value);
   /* if(formprod.value.id = null){
      
    }
    else{
      this.dataApi.updateProd(formprod.value);
    }*/
  }
}
