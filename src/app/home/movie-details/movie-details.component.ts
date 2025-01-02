import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Movie } from '../../movie.model';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MovieExpandedComponent } from './movie-expanded.component';

@Component({
  selector: 'app-movie-details',
  imports: [NgOptimizedImage, MatIcon, DatePipe, MovieExpandedComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-details.component.html',
  styleUrl: 'movie-details.component.scss',
})
export class MovieDetailsComponent {
  movie = input.required<Movie>();
  isPriority = input<boolean>(false);
  update = output<Movie>();
  toggled = signal(false);

  toggleFavClick(): void {
    this.update.emit({ ...this.movie(), isFav: !this.movie().isFav});
  }

  markAsWatchedClick(): void {
    this.update.emit({ ...this.movie(), isWatched: !this.movie().isWatched});
  }

  toggleDetails(): void {
    this.toggled.update(value => !value);
  }
}
