import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl='https://localhost:7287/api'
  constructor(private http: HttpClient) { }
  getSecureData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Securedata/product`);
  }
}
