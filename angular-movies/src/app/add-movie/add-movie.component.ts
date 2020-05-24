import { Component, OnInit } from '@angular/core';
import { Person } from '../persons/person';
import { PersonService } from '../person.service';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent implements OnInit {
  movies: Movie[];
  persons: Person[];
  movDir = '';
  movieDel = '';

  constructor(private movieService: MovieService,
              private personService: PersonService) { }

  ngOnInit(): void {

    this.getPersons();
    this.getMovies();
  }

  refreshPage(): void {
    window.location.reload();
  }


  getPersons(): void {
    this.personService.getPersons()
    .subscribe(persons => this.persons = persons);
  }


   getMovies(): void {
      this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  addMovie(id: string, name: string, premiere: number, duration: number,
           country: string, description: string, imageURL: string): void {
    id = id.trim();
    name = name.trim();
    country = country.trim();
    description = description.trim();
    imageURL = imageURL.trim();
    if (!name || !id ) { return; }
    this.movieService.addMovie({ id, name, premiere, duration, country, description, imageURL } as Movie, this.movDir)
      .subscribe( movie => {
        this.movies.push(movie);
      });
  }

  deleteMovie() {
    this.movieService.deleteMovie(this.movieDel)
       .subscribe( movie => {
        this.movies.push(movie);
      });
  }

}


