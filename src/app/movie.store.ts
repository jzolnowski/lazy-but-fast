import { Injectable, linkedSignal } from '@angular/core';
import { Movie } from './movie.model';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieStore {
  moviesResource = httpResource<Movie[]>(() => `/assets/movies/movies.json`);
  readonly loading = this.moviesResource.isLoading;
  readonly error = this.moviesResource.error;
  readonly status = this.moviesResource.status;
  readonly reload = this.moviesResource.reload;
  movies = linkedSignal(() => this.moviesResource.value());

  update(movie: Movie): void {
    const movieIndex = this.moviesResource.value()?.findIndex(({id}) => movie.id == id);
    movieIndex && this.moviesResource.value.update((movies) => {
      if (movies) {
        movies[movieIndex] = movie;
      }
      return movies;
    });
  }
}
