import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  formCrearUsuario: FormGroup = new FormGroup({});

  data: any = [];
  constructor(private _userService: UserService, private el: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    this.formCrearUsuario = new FormGroup(
      {
        nombreUsuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
        pass: new FormControl('', [Validators.minLength(8), Validators.required])
      });
    this.consultarTodosUsuarios();
  }

  consultarTodosUsuarios() {
    this._userService.consultarTodosUsuarios().subscribe((r: any) => {
      console.log("r", r);
      this.data = r;

    })

  }
  crearUsuario() {
    const { nombreUsuario, pass } = this.formCrearUsuario.value;

    this._userService.crearUsuario(nombreUsuario, pass).subscribe((r: any) => {
      console.log("res", r);
      this.consultarTodosUsuarios();
      $("#crearUsuarioModal").modal("hide");
      this.formCrearUsuario.reset();
    });

  }

}
