import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Film from './film';

@Injectable()
export class FilmService {

  constructor(private http: HttpClient) { }

  searchFilm(title: string): Observable<Film> {
    return this.http.get<Film>('http://www.omdbapi.com/?apikey=95d17612&t=' + title);
  }
}
