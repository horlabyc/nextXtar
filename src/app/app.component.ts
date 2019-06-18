import { Component, OnInit } from '@angular/core';
import * as Crypto from 'crypto-js' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncDecrService } from './Utilities/enc-decr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NextXtar';
  body; header;
  param ={
    "ApiName":"NextXtar_admin",
    "email":"findchunglee@yahoo.co.uk",
    "Password":"vialli01234"
  };
  constructor( private http: HttpClient, private EncrDecr: EncDecrService) {
  this.header = new HttpHeaders();
  //  this.header.append('Content-Type', 'application/x-www-form-urlencoded');
    // tslint:disable-next-line:max-line-length
    this.header.append('Content-Type', 'application/json');
    this.header.append(
      // tslint:disable-next-line:max-line-length
      'Authorization', 'Bearer yR23E1-KNwti9XOwzStP9K9PQnRzFcFqhd8vqqprntMMeCpBI0vwY1kKSxNeCQ-vT5JOpvUdqgB8XrCgjO4PzWegIDyjSmTL8x901aFhAIr_M_B6RtrDpD-Hq1oy_STiJ5F9VuBPDPCiZ3tOWjitRgj9ynAiUMZ-ctWklXmYE-ElNhJ6-AhW_NVTjd9rHuWWgnU1b6uSdgByeM8fgYVvnHTJok6eFkgBSO4VeZU3glmxB_OZoOQm82bKesfBNhTwTF3WoT_KLVPERKPQsDz_NMjWul3p-YYwE2z8JMrLLVv5offlR3ufwxxXWZ8NEzkDFo55x-k_z4o0RJIBXnkZjQ');
    this.body = new URLSearchParams();
    this.body.set('Username', 'NextXtar_admin');
    this.body.set('Password', 'nextxtar_admin123');
    this.body.set('grant_type', 'password');
  }

  tokenGen() {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization',  'Bearer yR23E1-KNwti9XOwzStP9K9PQnRzFcFqhd8vqqprntMMeCpBI0vwY1kKSxNeCQ-vT5JOpvUdqgB8XrCgjO4PzWegIDyjSmTL8x901aFhAIr_M_B6RtrDpD-Hq1oy_STiJ5F9VuBPDPCiZ3tOWjitRgj9ynAiUMZ-ctWklXmYE-ElNhJ6-AhW_NVTjd9rHuWWgnU1b6uSdgByeM8fgYVvnHTJok6eFkgBSO4VeZU3glmxB_OZoOQm82bKesfBNhTwTF3WoT_KLVPERKPQsDz_NMjWul3p-YYwE2z8JMrLLVv5offlR3ufwxxXWZ8NEzkDFo55x-k_z4o0RJIBXnkZjQ');
    return this.http.post('https://api.nextxtar.com/TokenGen', this.body.toString(), { headers } ).subscribe(data => {
      console.log(data);
    });
  }

  signIn() {
    // tslint:disable-next-line:max-line-length
    return this.http.post('https://api.nextxtar.com/Api/SignIn', this.param).subscribe( data => {
      console.log(data);
    });
  }

  ngOnInit() {
  //  this.signIn();
  //  this.tokenGen();
  }

}
