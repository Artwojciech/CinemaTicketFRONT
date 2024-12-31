import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film/film.service';
import { CinemaService } from '../../services/cinema/cinema.service';
import { ProjectionService } from '../../services/projection/projection.service';
import { Film } from '../../models/film.model';
import { Cinema } from '../../models/cinema.model';
import { Projection } from '../../models/projection.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-film-site',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './film-site.component.html',
  styleUrls: ['./film-site.component.css'],
})
export class FilmSiteComponent implements OnInit {
  film: Film | undefined;
  availableCinemas: Cinema[] = [];
  selectedCinema: Cinema | null = null;
  selectedCinemaProjections: Projection[] = [];
  selectedProjection: Projection | null = null;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private cinemaService: CinemaService,
    private projectionService: ProjectionService,
    private router: Router
  ) {}

  ngOnInit() {
    const filmId = this.route.snapshot.paramMap.get('id'); 
    if (filmId) {
      this.cinemaService.getCinemasByFilmId(+filmId).subscribe((cinemas) => {
        this.availableCinemas = cinemas;
      });
  
      this.filmService.getFilmById(+filmId).subscribe((filmData) => {
        this.film = filmData;
      });
    } else {
      console.error('Film ID is null or undefined');
    }
  }
  

  onCinemaSelect(cinema: Cinema) {
    this.selectedCinema = cinema;
    if (this.film) {
      this.projectionService
        .getProjectionsByCinemaAndFilm(cinema.id, this.film.id)
        .subscribe((projections) => {
          this.selectedCinemaProjections = projections;
        });
    }
    this.selectedProjection = null; 
  }

  onProjectionSelect(projection: Projection) {
    this.selectedProjection = projection;
  }

  navigateToSeatMap() {
    if (this.selectedProjection) {
      this.router.navigate(['/seat-map', this.selectedProjection.id]);
    }
  }
}
