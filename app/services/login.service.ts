import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { AuthUser } from '../models/AuthUser';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  PATH_OF_API = 'http://117.211.75.160:8065/api';

  // user=new BehaviorSubject<AuthUser | null >(null)  ;

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private httpClient: HttpClient) {}

  public login(loginData: any) {
    return this.httpClient.post(this.PATH_OF_API + '/login', loginData, {
      headers: this.requestHeader,
    });
  }
}
