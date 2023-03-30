import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {   //Para proteger las rutas 


  constructor (private authService: AuthService, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean> | boolean  {

     if (this.authService.auth.id){  //Si encuentra un id logeado, el guard te deja entrar 
      return true;
   }
  return this.authService.verificaAutentificacion().
          pipe(
            tap((estaAutenticado) => {
              if(!estaAutenticado){                //Si no esta autenticado, te devuelve a la pagina del login
                this.router.navigate(['/auth/login']);
              }
            } )
          );
}


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > | Promise<boolean > | boolean | boolean {

      return this.authService.verificaAutentificacion();

  }
}
