import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginCredential } from '../types/login';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import { Plugins } from "@capacitor/core";
import { ToastController } from '@ionic/angular';
const {Modals}=Plugins;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup:FormGroup;
  
  constructor(
    private _router:Router,
    fomrBuilder:FormBuilder,
    private _loginService:LoginService,
    public toastController: ToastController    
  ) { 
    this.loginFormGroup=fomrBuilder.group({
      email: ["",[Validators.email]],
      password:["",[Validators.required]]
    });
  }

  ngOnInit() {
  }
  async login(){
    const loginCredentials:LoginCredential=this.loginFormGroup.value;
    this._loginService.login(loginCredentials)
    .then((authData)=>{
      this.presentToastWithOptions(true);
    })
    
    .catch((authError)=>{
      this.presentToastWithOptions(false);
      console.log("Auth error => ",authError);
    });
  }


  async presentToastWithOptions(logueo:boolean) {
    const toast = await this.toastController.create({
      position: 'bottom',
      cssClass: "toast-success"
      
    });
    if(logueo){
    toast.color="success";
    toast.message="logueo";}
    else{
      toast.color="danger";
      toast.message="Usuario o contraseña invalidos"
    }
    toast.present();
  }
  
}
export class Usuario{
  public nombre;
  public clave;
}
