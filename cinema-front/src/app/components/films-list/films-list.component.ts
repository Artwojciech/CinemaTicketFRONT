import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film/film.service';
import { Film } from '../../models/film.model';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule, ActivatedRoute } from '@angular/router'; // Import ActivatedRoute

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [NgFor, NavbarComponent, RouterModule],
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
})
export class FilmsListComponent implements OnInit {
  films: Film[] = [];

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const filters = {
        city: params['city'] || null,
        date: params['date'] || null,
        title: params['title'] || null,
      };

      console.log('Aktywne filtry:', filters);

      this.filmService.getFilms(filters).subscribe((data) => {
        this.films = data.films || data; 
        console.log('Pobrane filmy:', this.films);
      });
    });
  }
}
