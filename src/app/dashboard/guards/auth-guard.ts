import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

// import { LoginService } from '../login/service/login.service';
// import { SessionSetGetService } from '../../shared/services/session-setget.service';

import { Observable } from 'rxjs';
import { LoginService } from '../login/service/login.service';
import { SessionSetGetService } from 'src/app/shared/services/session-setget.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private sessionsetGet: SessionSetGetService,
  ) { }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    return this.checkAccess();
  }

  public canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.checkAccess();
  }

  public authenticated() {
    if (!this.loginService.userIsAuthenticated() || sessionStorage.length === 0) {
      this.sessionsetGet.clearSession();
      this.router.navigate(['/']);
    }
  }

  private checkAccess() {
    if (this.loginService.userIsAuthenticated()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
