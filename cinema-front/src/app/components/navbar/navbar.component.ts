import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Dodano Router do nawigacji
import { CinemaService } from '../../services/cinema/cinema.service';
import { Cinema } from '../../models/cinema.model';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Dodano FormsModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cities: string[] = []; // Lista unikalnych miast
  showCalendar = false;
  showProfile = false;

  username: string = '';
  status: string = '';

  // Dodane zmienne do obsługi filtrów
  selectedCity: string = '';
  selectedDate: string = '';
  titleQuery: string = '';

  constructor(private cinemaService: CinemaService, private router: Router) {}

  ngOnInit() {
    this.cinemaService.getCinemas().subscribe((response: { cinemas: Cinema[] }) => {
      console.log('Odpowiedź z backendu:', response);
      const cinemas = response.cinemas;
      this.cities = Array.from(new Set(cinemas.map((cinema: Cinema) => cinema.city)));
      console.log('Unikalne miasta:', this.cities);
    });
  }
  

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  toggleProfilePanel() {
    this.showProfile = !this.showProfile;
  }

  onCitySelect(city: string) {
    this.selectedCity = city;
    this.navigateWithFilters();
  }

  onDateSelect(event: Event) {
    const inputElement = event.target as HTMLInputElement; 
    this.selectedDate = inputElement.value; 
    this.showCalendar = false; 
    this.navigateWithFilters(); 
  }
  

  onTitleSearch(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.navigateWithFilters();
    }
  }

  private navigateWithFilters() {
    this.router.navigate(['/films'], {
      queryParams: {
        city: this.selectedCity || null,
        date: this.selectedDate || null,
        title: this.titleQuery || null,
      },
    });
  }
}
