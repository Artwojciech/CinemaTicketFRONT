import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cinema } from '../../models/cinema.model';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  private apiUrl = 'http://localhost:8080/cinemas'; // Endpoint do pobierania kin

  constructor(private http: HttpClient) {}

  getCinemas(): Observable<any> {
    // Pobiera wszystkie kina
    return this.http.get(this.apiUrl);
  }
}
