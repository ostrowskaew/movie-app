import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from './movie';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService, private messageService: MessageService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }

  getMovieList(): Movie[] {
    return this.movies;
  }

   addMovie(id: string, name: string, premiere: number, duration: number,
            country: string, description: string, imageURL: string, director: string ): void {
    id = id.trim();
    name = name.trim();
    country = country.trim();
    description = description.trim();
    imageURL = imageURL.trim();
    if (!name || !id ) { return; }
    this.movieService.addMovie({ id, name, premiere, duration, country, description, imageURL } as Movie, director)
      .subscribe( movie => {
        this.movies.push(movie);
      });
  }

}
