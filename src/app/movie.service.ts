import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http: HttpClient = inject(HttpClient);

  getMovies(): Observable<Movie[]> {
    return this.http.get<{ movies: Movie[] }>(`/assets/movies/movies.json`)
      .pipe(
        map(({movies}) => movies)
      )
  }
}
