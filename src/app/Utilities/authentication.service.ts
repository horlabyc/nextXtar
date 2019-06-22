import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { map, shareReplay, catchError, retry, tap } from 'rxjs/operators';
import { Account } from './../auth-pages/register/account';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  header = new HttpHeaders();
  body = new URLSearchParams();

  constructor( private http: HttpClient) {
    this.header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.body.set('Username', 'NextXtar_admin');
    this.body.set('Password', 'nextxtar_admin123');
    this.body.set('grant_type', 'password');
  }

  signIn(userInfo): Observable<any> {
    const header = new HttpHeaders().set('Content-Type', 'application/json' );
   return this.http.post(`https://api.nextxtar.com/Api/SignIn`, userInfo, { headers: header} );
  }

  signUp(userData: Account): Observable<any> {
    const userInfo = { ...userData};
    userInfo['ApiName'] = 'NextXtar_admin';
    const header = new HttpHeaders().set('Content-Type', 'application/json' );
    return this.http.post(`https://api.nextxtar.com/Api/SignUp`, userInfo, { headers: header });
  }

  forgotPassword() {

  }

  changeKnownPassword() {

  }

  changeForgottenPassword() {

  }

  getToken(): Observable<any> {
    return this.http.post('https://api.nextxtar.com/TokenGen', this.body.toString(), { headers : this.header} )
    .pipe(
      retry(3),
      shareReplay(),
      catchError(this.handleError)
    );
  }

  _getToken() {
    this.getToken().subscribe(res => {
      const { access_token } = res;
      localStorage.setItem('token', JSON.stringify(access_token));
    });
  }

  completeRequest(request: HttpRequest<any>, next: HttpHandler) {
    console.log('here');
    next.handle(request).subscribe(res => {
    }, err => console.log(err));
  }

  handleError( err: HttpErrorResponse) {
    return throwError(err);
  }
}
