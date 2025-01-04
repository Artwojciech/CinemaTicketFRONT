import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seat } from '../../models/seat.model';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  private apiUrl = 'http://localhost:8080/seats';

  constructor(private http: HttpClient) {}

  getSeatsWithTypes(projectionId: number): Observable<Seat[]> {
    return this.http.get<Seat[]>(`${this.apiUrl}/by-projection/${projectionId}`);
  }
}
