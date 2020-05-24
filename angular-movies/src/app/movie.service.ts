import { Injectable } from '@angular/core';
import { Movie } from './movies/movie';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'http://localhost:8081/movies';
  private personsUrl = 'http://localhost:8081/persons';

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getMovies(): Observable<Movie[]> {
  return this.http.get<Movie[]>(this.moviesUrl)
  .pipe(
    tap(_ => this.log('fetched movies')),
    catchError(this.handleError<Movie[]>('getMovies', []))
  );
}

  getMovie(id: number): Observable<Movie> {
     const url = `${this.moviesUrl}/${id}`;
     return this.http.get<Movie>(url).pipe(
     tap(_ => this.log(`fetched movie id=${id}`)),
     catchError(this.handleError<Movie>(`getMovie id=${id}`))
  );
  }

  private log(message: string) {
  this.messageService.add(`MovieService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
  }

 searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/bytitle/${term}`).pipe(
      tap(x => x.length ?
         this.log(`found movies matching "${term}"`) :
         this.log(`no movies matching "${term}"`)),
      catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }

  addMovie(movie: Movie, directorId: string): Observable<Movie> {
    const url = `${this.personsUrl}/${directorId}/movies/`;
    return this.http.post<Movie>(url , movie, this.httpOptions).pipe(
      tap((newMovie: Movie) => this.log(`added movie w/ id=${newMovie.id}`)),
      catchError(this.handleError<Movie>('addMovie'))
    );
  }

  addMovieGenere(idMovie: string, idGenere: string): Observable<Movie> {
    const url = `${this.moviesUrl}/${idMovie}/genere/${idGenere}`;
    return this.http.put(url, this.httpOptions).pipe(
      tap((newMovie: Movie) => this.log(`added movieGenere w/ id=${newMovie.id}`)),
      catchError(this.handleError<Movie>('addMovieGenere'))
    );
  }

  deleteMovie(idMovie: string): Observable<Movie> {
    const url = `${this.moviesUrl}/${idMovie}`;
    return this.http.delete<Movie>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted movie id=${idMovie}`)),
      catchError(this.handleError<Movie>('deleteHero'))
    );
  }

}
