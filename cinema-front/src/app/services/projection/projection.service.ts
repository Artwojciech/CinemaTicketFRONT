import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projection } from '../../models/projection.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectionService {
  private apiUrl = 'http://localhost:8080/projections';

  constructor(private http: HttpClient) {}

  getProjectionsByCinemaAndFilm(cinemaId: number, filmId: number): Observable<Projection[]> {
    const params = new HttpParams()
      .set('cinemaId', cinemaId.toString())
      .set('filmId', filmId.toString());

    return this.http.get<Projection[]>(`${this.apiUrl}/by-cinema-and-film`, { params });
  }
}
