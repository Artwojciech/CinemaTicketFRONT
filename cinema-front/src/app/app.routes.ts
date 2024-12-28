import { Routes } from '@angular/router';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmSiteComponent } from './components/film-site/film-site.component';

export const routes: Routes = [
  { path: '', component: MainSiteComponent }, // Strona główna
  { path: 'films', component: FilmsListComponent }, // Lista filmów z opcjonalnymi filtrami
  { path: 'film/:id', component: FilmSiteComponent }, // Szczegóły filmu
  { path: '**', redirectTo: '' }, // Przekierowanie
];