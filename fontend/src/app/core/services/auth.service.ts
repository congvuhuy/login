import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl='https://localhost:7287/api'

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {username, password};
    return this.http.post<any>(`${this.apiUrl}/Auth`,JSON.stringify(body), {headers}  );
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      return false;
    }
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    const expiry = tokenPayload.exp;
    const now = Math.floor((new Date).getTime() / 1000);
    return now < expiry;
  }
  logout(): void {
    localStorage.removeItem('jwtToken');
  }
}
