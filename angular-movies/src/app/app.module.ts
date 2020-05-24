import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { PersonsComponent } from './persons/persons.component';
import { DirectorListComponent } from './director-list/director-list.component';
import { GeneresComponent } from './generes/generes.component';
import { GenereListComponent } from './genere-list/genere-list.component';
import { ManagerComponent } from './manager/manager.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AddGenereComponent } from './add-genere/add-genere.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MovieSearchComponent,
    PersonsComponent,
    DirectorListComponent,
    GeneresComponent,
    GenereListComponent,
    ManagerComponent,
    AddMovieComponent,
    AddPersonComponent,
    AddGenereComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
