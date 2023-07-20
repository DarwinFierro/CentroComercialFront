import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userRole = localStorage.getItem('rol_name');
    const allowedRoles = route.data['allowedRoles'] as string[]; 
    if (!userRole) {
      this.router.navigateByUrl('');
      return false;
    } else {
      if (allowedRoles.includes(userRole)) {
        return true;
      } else {
        this.router.navigateByUrl('/dashboard/listarLocal');
        return false;
      }
    }
  }
}
