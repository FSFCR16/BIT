import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modelos/users.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string):
    Observable<User> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" })

    return this.http.post<User>(
      "https://dummyjson.com/docs/auth/login",
      JSON.stringify({ username, password }),
      {
        headers
      })
  }
}
