import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogin=true;
        this.nombreUsuario=auth.displayName;
        this.emailUsuario=auth.email;
      } else{
        this.isLogin=false;
      }
    });
  }
onClickLogout(){
  this.authService.logout();

}
}
