import { Component, OnInit } from '@angular/core';
import { FilmService, Film } from '../services/film.service';
@Component({
  selector: 'app-film-list',
  template: `
    <div class="film-list">
      <h1>Film List</h1>
      <div *ngFor="let film of films" class="film">
        <img [src]="film.image_url" alt="{{ film.title }}" />
        <h2>{{ film.title }}</h2>
        <p>Year: {{ film.year }}</p>
      </div>
    </div>
  `,
  styles: [`
    .film-list { display: flex; flex-wrap: wrap; justify-content: center; }
    .film { margin: 10px; text-align: center; }
    img { max-width: 200px; }
  `]
})
export class FilmsListComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.filmService.getFilms().subscribe(data => this.films = data);
  }
}
