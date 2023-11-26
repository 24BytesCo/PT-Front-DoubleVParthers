import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("validando");

    return this.revisarToken();
  }

  revisarToken() {
    try {
      console.log("validano 2");

      console.log("this._authService.isAuthenticated()", this._authService.isAuthenticated());

      if (this._authService.isAuthenticated()) {
        return true;
      }
      this._router.navigate(['/auth/login']);

      return false;
    } catch (error) {

      console.log("Ha ocurrido un error en GuardSession", error);
      return false;
    }
  }

}
