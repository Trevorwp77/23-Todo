import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

export function routeGuardService(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  const authService = inject(HardcodedAuthenticationService);
  const router = inject(Router);

  if (authService.isUserLoggedIn()) {
    return true;
  } else {
    // Redirect to the login page
    return router.parseUrl('/login'); 
  }
}
