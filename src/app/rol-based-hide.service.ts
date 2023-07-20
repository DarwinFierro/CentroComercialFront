import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolBasedHideService {

  constructor() { }
  shouldHide(rolesToHide: string[]): boolean {
    const userRole = localStorage.getItem('rol_name');
    return rolesToHide.includes(userRole);
  }
}
