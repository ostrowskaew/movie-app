import { Injectable } from '@angular/core';
import { Person } from './persons/person';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

 private personsUrl = 'http://localhost:8081/persons';

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPersons(): Observable<Person[]> {
  return this.http.get<Person[]>(this.personsUrl)
  .pipe(
    tap(_ => this.log('fetched persons')),
    catchError(this.handleError<Person[]>('getPersons', []))
  );
}

  getPerson(id: number): Observable<Person> {
     const url = `${this.personsUrl}/${id}`;
     return this.http.get<Person>(url).pipe(
     tap(_ => this.log(`fetched person id=${id}`)),
     catchError(this.handleError<Person>(`getPerson id=${id}`))
  );
  }

  private log(message: string) {
  this.messageService.add(`PersonService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
  }
/** POST: add a new person to the server */
  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.personsUrl, person, this.httpOptions).pipe(
      tap((newPerson: Person) => this.log(`added person w/ id=${newPerson.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }



  deletePerson(idPerson: string): Observable<Person> {
    const url = `${this.personsUrl}/${idPerson}`;
    return this.http.delete<Person>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted person id=${idPerson}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }

}
