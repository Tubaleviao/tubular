import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const worked = new Observable<boolean>(obs => {
      if(typeof JSON.parse(localStorage.getItem('user'))?.username === 'string'){
        obs.next(true)
      }else{
        this.router.navigate(['login'])
        obs.next(false)
      }
      
    })
    
    return worked;
  }
  
}
