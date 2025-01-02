import { inject, Injectable, linkedSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieStore {
  private movieService = inject(MovieService);

  moviesResource = rxResource({
    loader: () => this.movieService.getMovies()
  });
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
