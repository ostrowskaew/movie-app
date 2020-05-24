import { Injectable } from '@angular/core';
import { Genere } from './generes/genere';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GenereService {

  private generesUrl = 'http://localhost:8081/generes';

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getGeneres(): Observable<Genere[]> {
  return this.http.get<Genere[]>(this.generesUrl)
  .pipe(
    tap(_ => this.log('fetched generes')),
    catchError(this.handleError<Genere[]>('getGeneres', []))
  );
}

  getGenere(id: number): Observable<Genere> {
     const url = `${this.generesUrl}/${id}`;
     return this.http.get<Genere>(url).pipe(
     tap(_ => this.log(`fetched genere id=${id}`)),
     catchError(this.handleError<Genere>(`getGenere id=${id}`))
  );
  }

  private log(message: string) {
  this.messageService.add(`GenereService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
  }

searchGeneres(term: string): Observable<Genere[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Genere[]>(`${this.generesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found generes matching "${term}"`) :
       this.log(`no generes matching "${term}"`)),
    catchError(this.handleError<Genere[]>('searchGeneres', []))
  );
}

  addGenere(genere: Genere): Observable<Genere> {
    return this.http.post<Genere>(this.generesUrl, genere, this.httpOptions).pipe(
      tap((newGenere: Genere) => this.log(`added genere w/ id=${newGenere.id}`)),
      catchError(this.handleError<Genere>('addGenere'))
    );
  }

   deleteGenere(idGenere: string): Observable<Genere> {
    const url = `${this.generesUrl}/${idGenere}`;
    return this.http.delete<Genere>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted genere id=${idGenere}`)),
      catchError(this.handleError<Genere>('deleteGenere'))
    );
  }

}

