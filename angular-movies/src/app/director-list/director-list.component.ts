import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies/movie';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../persons/person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-director-list',
  templateUrl: './director-list.component.html',
  styleUrls: ['./director-list.component.css']
})

export class DirectorListComponent implements OnInit {
  @Input() person: Person;
  movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService) { }

  ngOnInit() {
    this.getPerson();
  }


   getPerson(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id)
    .subscribe(person => this.person = person);

    this.movies = this.person.movies;  }

}
