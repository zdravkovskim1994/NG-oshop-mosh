import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(router, state: RouterStateSnapshot) {
    return this.auth.user$.pipe(
      map(user => {
        if (user) return true;

          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
          return false;
      })
    );

  }
  
}
