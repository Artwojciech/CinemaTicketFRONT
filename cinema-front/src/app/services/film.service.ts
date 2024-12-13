import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Film {
  id: number;
  title: string;
  year: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiUrl = 'http://localhost:8080/films'; // Adres API backendu

  constructor(private http: HttpClient) {}

  getFilms(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
