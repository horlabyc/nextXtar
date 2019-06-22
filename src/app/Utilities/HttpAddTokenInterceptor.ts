import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenGeneratorService } from './token-generator.service';
import { switchMap, catchError, tap, map, retry } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor( private http: HttpClient, private tokenService: TokenGeneratorService, private auth: AuthenticationService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = JSON.parse(localStorage.getItem('token'));
    if ( req.url === 'https://api.nextxtar.com/TokenGen') {
      return next.handle(req);
    } else {
      if (!token) {
        this.auth._getToken();
      }
      console.log(req);
      const clone = req.clone({
        setHeaders: {Authorization : `Bearer ${token}`}
      });
      return next.handle(clone);
    }
  }
}
