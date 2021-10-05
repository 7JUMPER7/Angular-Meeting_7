import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Good from './goods/good';
import User from './user/user';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
  getGoods() {
    return this.http.get<Good[]>('http://localhost:3000/goods');
  }
  regUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://localhost:3000/register', user, httpOptions);
  }
}
