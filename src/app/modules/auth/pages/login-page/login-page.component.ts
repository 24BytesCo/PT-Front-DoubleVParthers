import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UsuarioInterface } from '../../../../core/models/Usuario.Interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {

    this.formLogin = new FormGroup(
      {
        nombreUsuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
        pass: new FormControl('', [Validators.minLength(8), Validators.required])
      });

  }
  
  enviarDatosLogueo(){
    const {  nombreUsuario, pass} = this.formLogin.value;

    this._auth.enviarCredenciales(nombreUsuario, pass ).subscribe((r :UsuarioInterface)=>
      {
        console.log("res", r);
        
      });

    
  }

}
