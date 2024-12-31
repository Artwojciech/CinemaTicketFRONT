import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cinema } from '../../models/cinema.model';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  private apiUrl = 'http://localhost:8080/cinemas'; 

  constructor(private http: HttpClient) {}

  getCinemas(): Observable<{ cinemas: Cinema[] }> {
    return this.http.get<{ cinemas: Cinema[] }>(this.apiUrl);
  }

  getCinemasByFilmId(filmId: number, city?: string): Observable<Cinema[]> {
    const params: any = city ? { city } : {}; 
    return this.http.get<Cinema[]>(`${this.apiUrl}/by-film/${filmId}`, { params });
  }
}
