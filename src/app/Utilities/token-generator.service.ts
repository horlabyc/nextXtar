import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpRequest, HttpClient, HttpEvent, HttpHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenGeneratorService {
  header = new HttpHeaders();
  body = new URLSearchParams();
  access_token: string;

  constructor( private http: HttpClient) {
    this.header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.body.set('Username', 'NextXtar_admin');
    this.body.set('Password', 'nextxtar_admin123');
    this.body.set('grant_type', 'password');
   }

  getToken(request: HttpRequest<any>, httpHandler: HttpHandler) {
    this.http.post('https://api.nextxtar.com/TokenGen', this.body.toString(), { headers : this.header}).subscribe(res => {
      console.log(res);
      this.access_token = res['access_token'];
      localStorage.setItem('token', JSON.stringify(this.access_token));
      this.executePendingRequest(request, httpHandler);
    });
  }

  executePendingRequest(request, next: HttpHandler) {
    const clone = request.clone({ setHeaders: {Authorization : `Bearer ${this.access_token}`}})
    next.handle(clone).subscribe(res => {
      console.log(res);
    }, err => console.log(err));
  }

}
