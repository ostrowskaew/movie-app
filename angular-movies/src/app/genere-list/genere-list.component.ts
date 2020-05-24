import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies/movie';
import { ActivatedRoute } from '@angular/router';
import { Genere } from '../generes/genere';
import { GenereService } from '../genere.service';

@Component({
  selector: 'app-genere-list',
  templateUrl: './genere-list.component.html',
  styleUrls: ['./genere-list.component.css']
})

export class GenereListComponent implements OnInit {
  @Input() genere: Genere;
  movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private genereService: GenereService) { }

  ngOnInit() {
    this.getGenere();
  }


   getGenere(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.genereService.getGenere(id)
    .subscribe(genere => this.genere = genere);

    this.movies = this.genere.movies;  }

}
