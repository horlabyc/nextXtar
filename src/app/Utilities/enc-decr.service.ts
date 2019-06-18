import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncDecrService {

  constructor() { }

  // The set method is use for encrypt the value.
  encrypt(keys, value){
    const key = CryptoJS.enc.Utf8.parse(keys);
    const iv = CryptoJS.enc.Utf8.parse(keys);
    const encrypted = CryptoJS.TripleDES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  // encrypt(data) {
  //   const key = '$sUlAiChUnNiGeRiA@aPpDeV7%!83*#(2019)u1G';
  //   const encrypted = Crypto.AES.encrypt(JSON.stringify(data), data);
  //   return encrypted.toString()
  // }

  // decrypt(encrypted) {
  //   const key = '$sUlAiChUnNiGeRiA@aPpDeV7%!83*#(2019)u1G';
  //   const decrypted = Crypto.AES.decrypt(encrypted, key);
  //   return decrypted.toString();
  // }

   // The get method is use for decrypt the value.
   decrypt(keys, value){
    const key = CryptoJS.enc.Utf8.parse(keys);
    const iv = CryptoJS.enc.Utf8.parse(keys);
    const decrypted = CryptoJS.TripleDES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
