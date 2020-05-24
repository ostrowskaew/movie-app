import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Genere } from './genere';
import { GenereService } from '../genere.service';

@Component({
  selector: 'app-generes',
  templateUrl: './generes.component.html',
  styleUrls: ['./generes.component.css']
})
export class GeneresComponent implements OnInit {

  generes: Genere[];

  constructor(private genereService: GenereService, private messageService: MessageService) { }

   ngOnInit() {
    this.getGeneres();
  }

  getGeneres(): void {
    this.genereService.getGeneres()
    .subscribe(generes => this.generes = generes);
  }

  getGenereList(): Genere[] {
    return this.generes;
  }

  addGenere(id: string, name: string): void {
    id = id.trim();
    name = name.trim();
    if (!name || !id ) { return; }
    this.genereService.addGenere({ id, name } as Genere)
      .subscribe(genere => {
        this.generes.push(genere);
      });
  }

}
