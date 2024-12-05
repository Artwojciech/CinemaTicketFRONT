import { Component, OnInit } from '@angular/core';
import { FilmService, Film } from '../services/film.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.css',
})
export class FilmsListComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.filmService.getFilms().subscribe((data) => {
      this.films = data.films;
    });
  }
}
