import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies/movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../movie.service';
import { Person } from '../persons/person';
import { Genere } from '../generes/genere';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
    .subscribe(movie => this.movie = movie);
  }

  toStringPerson(director: Person): string {
    return director.name + ' ' + director.surname;
  }

  toStringGenere(genere: Genere): string {
    return genere.name;
  }

  goBack(): void {
  this.location.back();
}

}
