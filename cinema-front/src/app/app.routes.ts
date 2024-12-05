import { FilmsListComponent } from './films-list/films-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'films', component: FilmsListComponent }
];