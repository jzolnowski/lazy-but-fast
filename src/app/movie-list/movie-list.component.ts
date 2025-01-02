import { ChangeDetectionStrategy, Component, inject, ResourceStatus } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MovieDetailsComponent } from '../home/movie-details/movie-details.component';
import { MovieStore } from '../movie.store';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MatProgressSpinner, MovieDetailsComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  protected store = inject(MovieStore);
  protected readonly status = ResourceStatus;

  markAsWatched(movie: Movie): void {
    this.store.update(movie);
  }

  toggleFav(movie: Movie): void {
    this.store.update(movie);
  }
}
