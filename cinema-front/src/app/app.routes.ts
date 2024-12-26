import { Routes } from '@angular/router';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { FilmsListComponent } from './components/films-list/films-list.component';

export const routes: Routes = [
  { path: '', component: MainSiteComponent }, 
  { path: 'films', component: FilmsListComponent }, 
  { path: '**', redirectTo: '' } 
];