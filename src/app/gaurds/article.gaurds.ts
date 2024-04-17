import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  CanLoad,
  GuardResult,
  MaybeAsync,
  Route,
  UrlSegment,
  CanDeactivate,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../servicess/auth.service';
import { CheckDeactivate } from '../check-CanDeactivate';

@Injectable({
  providedIn: 'root',
})
export class ArticlesGaurd
  implements
    CanActivate,
    CanActivateChild,
    CanLoad,
    CanDeactivate<CheckDeactivate>
{
  constructor(private readonly authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authService.currentUser.pipe(map((user) => !!user));
    // return of(false); //không cho truy xuất nữa.
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const targetSlug = childRoute.params['slug'];
    if (!targetSlug) {
      return of(false);
    }
    return this.authService.currentUser.pipe(
      map((user) => user.articles.includes(targetSlug))
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authService.currentUser.pipe(map((user) => !!user));
  }

  canDeactivate(
    component: CheckDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> {
    return component.checkDeactivate(currentRoute, currentState, nextState);
  }
}
