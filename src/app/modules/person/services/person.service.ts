import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private URL_API: string = environment.API;
  constructor(private _httpClient: HttpClient) { }

  consultarTodasPersonas(): Observable<any> {
    return this._httpClient.get(this.URL_API + "Persona/list");
  }


}
