import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {UserInterface} from '../../interfaces/user';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent implements OnInit {

  constructor(private as: AuthService) { }
user: UserInterface={
  name: '',
  email: '',
  photourl: ''
};
public providerId: string='null';
  ngOnInit() {
  this.as.getAuth().subscribe(user=>{
    if(user){
      this.user.name=user.displayName;
      this.user.email=user.email;
      this.user.photourl=user.photoURL;
      this.providerId=user.providerData[0].providerId;
    }
  })
  }

}
