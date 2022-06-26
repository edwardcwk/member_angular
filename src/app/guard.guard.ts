import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { return this.checkLogined() 
    }

  constructor(private router:Router) {

  }

  checkLogined() {
    if ((localStorage.getItem('name') || "").length > 0)
      return true;
    else {
      this.router.navigateByUrl("/login");
      return false;  
    }
  }


}
