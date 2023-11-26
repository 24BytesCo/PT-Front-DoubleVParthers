import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_API = environment.API;
  constructor(private _httpClient: HttpClient) { }


  consultarTodosUsuarios(): Observable<any> {
    return this._httpClient.get(this.URL_API + "Usuario/list");
  }

  crearUsuario(nombreUsuario: string, pass: string) {
    return this._httpClient.post(this.URL_API + "Usuario/crearUsuario", { nombreUsuario, pass });
  }
}
