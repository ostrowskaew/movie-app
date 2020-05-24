import { Component, OnInit } from '@angular/core';
import { Person } from '../persons/person';
import { PersonService } from '../person.service';
import { Genere } from '../generes/genere';
import { GenereService } from '../genere.service';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})

export class AddPersonComponent implements OnInit {
  persons: Person[];
  movieDir = '';

  constructor(private personService: PersonService) { }

  ngOnInit(): void {

    this.getPersons();
  }

  refreshPage(): void {
    window.location.reload();
  }

  getPersons(): void {
    this.personService.getPersons()
    .subscribe(persons => this.persons = persons);
  }


  addPerson(id: string, name: string, surname: string): void {
    id = id.trim();
    name = name.trim();
    surname = surname.trim();
    if (!name || !id || !surname) { return; }
    this.personService.addPerson({ id, name, surname } as Person)
      .subscribe(person => {
        this.persons.push(person);
      });
  }


  deletePerson() {
    this.personService.deletePerson(this.movieDir)
     .subscribe(person => {
        this.persons.push(person);
      });
  }

}


