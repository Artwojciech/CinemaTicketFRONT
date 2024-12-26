import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Film } from '../../models/film.model';
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
      console.log(data.films);
    });
  }
}
