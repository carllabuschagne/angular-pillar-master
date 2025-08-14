// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.auth.isAuthenticated$.pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          //this.auth.loginWithRedirect({ appState: { target: this.router.url } });
          alert('You must be logged in to access this page.');
          //this.router.navigate(['/login']);
        } else {
          alert('authenticated');
          // Optionally, you can redirect to a specific page after login
          // this.router.navigate(['/dashboard']);
        }
      })
    );
  }
}
