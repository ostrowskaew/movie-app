import { Component, OnInit } from '@angular/core';
import { Genere } from '../generes/genere';
import { GenereService } from '../genere.service';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-add-genere',
  templateUrl: './add-genere.component.html',
  styleUrls: ['./add-genere.component.css']
})

export class AddGenereComponent implements OnInit {
  generes: Genere[];
  movies: Movie[];
  movie = '';
  genere = '';

  constructor(private genereService: GenereService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.getGeneres();
    this.getMovies();
  }

   getGeneres(): void {
      this.genereService.getGeneres()
      .subscribe(generes => this.generes = generes);
  }

  getMovies(): void {
      this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  refreshPage(): void {
    window.location.reload();
  }


  addGenere(id: string, name: string): void {
    id = id.trim();
    name = name.trim();
    if (!name || !id ) { return; }
    this.genereService.addGenere({ id, name } as Genere)
      .subscribe( genere => {
        this.generes.push(genere);
      });
  }

  addGenereMovie(): void {
    this.movieService.addMovieGenere(this.movie, this.genere)
      .subscribe( movie => {
        this.movies.push(movie);
      });
  }


}


