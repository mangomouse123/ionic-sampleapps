import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';


let apiUrl = "http://localhost/PHP-Slim-Restful/api/";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders();
      this.http.post(apiUrl+type, JSON.stringify(credentials)).
      subscribe(res =>{
        console.log('Suceess');
        resolve(res);
      }, (err) =>{
        console.log('Falied');
        reject(err);
    });
  });
}
}
