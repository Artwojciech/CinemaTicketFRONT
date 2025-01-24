import { Routes } from '@angular/router';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmSiteComponent } from './components/film-site/film-site.component';
import { SeatMapComponent } from './components/seat-map/seat-map.component';
import { PaymentSiteComponent } from './components/payment-site/payment-site.component'; // Import nowego komponentu

export const routes: Routes = [
  { path: '', component: MainSiteComponent, data: { renderMode: 'default' } }, // Strona główna
  { path: 'films', component: FilmsListComponent, data: { renderMode: 'default' } }, // Lista filmów z opcjonalnymi filtrami
  { path: 'film/:id', component: FilmSiteComponent, data: { renderMode: 'default' } }, // Szczegóły filmu
  { path: 'seat-map/:projectionId', component: SeatMapComponent, data: { renderMode: 'default' } }, // Mapa miejsc
  { path: 'payment', component: PaymentSiteComponent, data: { renderMode: 'default' } }, // Strona płatności
  { path: '**', redirectTo: '', data: { renderMode: 'default' } }, // Przekierowanie
];
