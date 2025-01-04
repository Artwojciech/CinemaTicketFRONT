import { Routes } from '@angular/router';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmSiteComponent } from './components/film-site/film-site.component';
import { SeatMapComponent } from './components/seat-map/seat-map.component';
import { PaymentSiteComponent } from './components/payment-site/payment-site.component'; // Import nowego komponentu

export const routes: Routes = [
  { path: '', component: MainSiteComponent }, // Strona główna
  { path: 'films', component: FilmsListComponent }, // Lista filmów z opcjonalnymi filtrami
  { path: 'film/:id', component: FilmSiteComponent }, // Szczegóły filmu
  { path: 'seat-map/:projectionId', component: SeatMapComponent }, // Mapa miejsc
  { path: 'payment', component: PaymentSiteComponent }, // Strona płatności
  { path: '**', redirectTo: '' }, // Przekierowanie
];
