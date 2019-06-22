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
import { catchError } from 'rxjs/operators';
import { TokenGeneratorService } from './token-generator.service';

@Injectable()
export class ErrorHandler implements HttpInterceptor {

  constructor( private http: HttpClient, private tokenService: TokenGeneratorService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( req.url === 'https://api.nextxtar.com/TokenGen') {
      return next.handle(req);
    }
    return next.handle (req)
      .pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse && err.statusText === 'Unauthorized' ) {
           this.tokenService.getToken(req, next);
           return throwError(err);
          } else {
            return throwError(err);
          }
        })
      );
    }
  }
