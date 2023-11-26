import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi: string = environment.API;

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  enviarCredenciales(nombreUsuario: string, pass: string): Observable<any> {
    console.log("nombreUsuario: ", nombreUsuario,);
    console.log("pass", pass);

    return this._httpClient.post(this.urlApi + "usuario/login",
      {
        nombreUsuario,
        pass
      }).pipe(
        tap((resOk: any) => {
          const { token, nombreUsuario } = resOk;

          if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
          }
          localStorage.setItem("token", token);
          this._router.navigate(['/']);

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Hola " + nombreUsuario
          });
        })


      );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  cerrarSesion(): void {
    console.log("cerramdo sesion");
    Swal.fire({
      title: "Sesion cerrada",
      icon: "success"
    }); 
    localStorage.removeItem("token");
    this._router.navigate(['/auth/login']);

  }
}
