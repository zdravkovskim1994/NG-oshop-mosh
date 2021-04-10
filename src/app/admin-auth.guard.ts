import { UserService } from './user.service';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  
  constructor(private auth: AuthService, private userService: UserService) {}

  // canActivate(): Observable<boolean> {
  //   return this.auth.appUser$.pipe(
  //     map(appUser => appUser.isAdmin)
  //     );
  // } 

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(
      map(appUser => appUser.isAdmin))
      
  }  
  
}
