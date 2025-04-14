import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    loadComponent: () => import('./movie-list/movie-list.component').then(c => c.MovieListComponent),
  }
];
