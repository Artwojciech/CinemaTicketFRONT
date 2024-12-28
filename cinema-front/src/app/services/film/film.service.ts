import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiUrl = 'http://localhost:8080/films';

  constructor(private http: HttpClient) {}

  getFilms(filters?: { city?: string; date?: string; title?: string }): Observable<any> {
    let params = new HttpParams();
    if (filters?.city) {
      params = params.set('city', filters.city);
    }
    if (filters?.date) {
      params = params.set('date', filters.date);
    }
    if (filters?.title) {
      params = params.set('title', filters.title);
    }
    return this.http.get(`${this.apiUrl}/filtered`, { params });
  }
  getFilmById(id: number): Observable<Film> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Film>(url);
  }
}
