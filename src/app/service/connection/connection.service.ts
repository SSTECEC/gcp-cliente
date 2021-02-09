import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public url = "http://localhost:3000/";
  constructor(private http: HttpClient) {
  }

  post(endpoint: string, body: any, token: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": ""+token+""
      })
    };
    return this.http.post(this.url + "" + endpoint, body, httpOptions).pipe(retry(2));
  }

  get(endpoint: string, token: any, params?: any, reqOpts?: any): Observable<any> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    reqOpts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": ""+token+""
      })
    };

    return this.http.get(this.url + "" + endpoint, reqOpts).pipe(retry(2));
  }
  
}
