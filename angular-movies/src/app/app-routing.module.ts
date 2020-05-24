import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonsComponent } from './persons/persons.component';
import { DirectorListComponent } from './director-list/director-list.component';
import { GeneresComponent } from './generes/generes.component';
import { GenereListComponent } from './genere-list/genere-list.component';
import { ManagerComponent } from './manager/manager.component';
import { AddGenereComponent } from './add-genere/add-genere.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'persons', component: PersonsComponent},
  { path: 'manager', component: ManagerComponent},
  { path: 'add-genere', component: AddGenereComponent},
  { path: 'add-person', component: AddPersonComponent},
  { path: 'add-movie', component: AddMovieComponent},
  { path: 'director-list/:id', component: DirectorListComponent},
  { path: 'genere-list/:id', component: GenereListComponent},
  { path: 'generes', component: GeneresComponent},
  { path: 'detail/:id', component: MovieDetailComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
