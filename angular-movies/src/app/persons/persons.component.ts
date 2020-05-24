import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { MessageService } from '../message.service';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

 persons: Person[];

  constructor(private personService: PersonService, private messageService: MessageService) {}

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons()
    .subscribe(persons => this.persons = persons);
  }

  getPersonList(): Person[] {
    return this.persons;
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

}
