import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor( private router: Router, private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('jwtToken');

    if (token) {

      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
                            .set("content-type", "application/json")

      });
      if(!this.authService.isLoggedIn()){
        this.authService.logout();
        this.router.navigate(['/login']);
        return throwError({ status: 401, message: 'Token expired' });
      }
      return next.handle(cloned)
    } else {
      return next.handle(req);
    }
  }

}
