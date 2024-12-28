import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film/film.service';
import { Film } from '../../models/film.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-film-site',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-site.component.html',
  styleUrls: ['./film-site.component.css'],
})
export class FilmSiteComponent implements OnInit {
  film: Film | undefined; 

  constructor(private route: ActivatedRoute, private filmService: FilmService) {}

  ngOnInit() {
    const filmId = this.route.snapshot.paramMap.get('id'); 
    if (filmId) {
      this.filmService.getFilmById(+filmId).subscribe((data) => {
        this.film = data; 
        console.log('Film załadowany:', this.film); 
      });
    }
  }
}
