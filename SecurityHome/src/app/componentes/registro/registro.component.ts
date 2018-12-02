import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public email: string;
  public password: string;

    uploadPercent: Observable<number>;
    urlImage: Observable<string>;
  constructor(

  private  authService: AuthService,
  private router: Router,
  public flashMensaje: FlashMessagesService,
  private storage: AngularFireStorage
  ) { }
    
  @ViewChild('imageuser') inputimageuser: ElementRef;
  ngOnInit() {
  }
onSubmitAddUser(){
  this.authService.registerUser(this.email, this.password)
  .then((res)=>{
    this.authService.getAuth().subscribe(user=>{
      if(user){
        user.updateProfile({
          displayName: '',
          photoURL: this.inputimageuser.nativeElement.value
        }).then(() => {
          this.router.navigate(['/miperfil'])
          this.flashMensaje.show('Usuario Creado Con Exito',
          {cssClass: 'alert-success', timeout:4000}
          );
        }).catch((error)=>{
          console.log(error);
        })
      }
    });
  }).catch((err)=>{
    this.flashMensaje.show('Hubo un error al intentar crear el usuario, intentar nuevamente' ,
    {cssClass: 'alert-danger', timeout:5000});
    console.log(err);
  });
  this.router.navigate[('/')];
}
onClickGoogleLogin(){
  this.authService.loginGoogle()
  .then((res)=>{
    this.router.navigate(['/privado'])
  }) .catch (err => console.log(err.message));
}
onClickFacebookLogin(){
  this.authService.loginFacebook()
  .then((res)=>{
    this.router.navigate(['/privado'])
  }) .catch (err => console.log(err.message));
}
onUploadP(e){
const id= Math.random().toString(36).substring(2);
const file= e.target.files[0];
const FilePath= 'upload/profile_$(id)';
const ref= this.storage.ref(FilePath);
const task= this.storage.upload(FilePath,file);
this.uploadPercent= task.percentageChanges();
task.snapshotChanges().pipe(finalize(()=>this.urlImage=ref.getDownloadURL())).subscribe();
}
}
