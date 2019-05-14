import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DataserviceService } from './services/dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionGuard  implements CanActivate{

  constructor(private router: Router, private userService: DataserviceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
      return this.userService.isLoggedIn() || this.router.parseUrl('/connect');
  }



}
