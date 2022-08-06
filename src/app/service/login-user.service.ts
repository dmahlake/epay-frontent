import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  baseUrl = "http://localhost:8080/api/auth/signin"
  constructor(private httpClient: HttpClient) { }

  LoginUser(user: User) :Observable<Object>
  {
    return this.httpClient.post(`${this.baseUrl}`, user) 
  }
}
