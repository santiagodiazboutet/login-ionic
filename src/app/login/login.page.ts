import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginCredential } from '../types/login';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import { Plugins } from "@capacitor/core";
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
    private _loginService:LoginService
    
  ) { 
    this.loginFormGroup=fomrBuilder.group({
      email: ["",[Validators.required]],
      password:["",[Validators.required]]
    });
  }

  ngOnInit() {
  }
  async login(){
    const loginCredentials:LoginCredential=this.loginFormGroup.value;
    this._loginService.login(loginCredentials)
    .then((authData)=>{
      this._router.navigate(["/home"]);
    })
    
    .catch((authError)=>{
      let alert=  Modals.alert({
        title:'error',
        message:'usuario o contraseña no encontrados'
      });
      console.log("Auth error => ",authError);
    });
  }
}
