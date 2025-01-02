import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Movie } from '../../movie.model';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NgOptimizedImage, MatIcon, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-details.component.html',
  styleUrl: 'movie-details.component.scss',
  animations: [
    trigger('slideDown', [
      state('void', style({ height: '0', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class MovieDetailsComponent {
  movie = input.required<Movie>();
  isPriority = input<boolean>(false);
  toggleFav = output<Movie>();
  markAsWatched = output<Movie>();
  isSelected = signal(false);

  toggleFavClick(): void {
    this.toggleFav.emit({ ...this.movie(), isFav: !this.movie().isFav});
  }

  markAsWatchedClick(): void {
    this.markAsWatched.emit({ ...this.movie(), isWatched: !this.movie().isWatched});
  }

  toggleDetails(): void {
    this.isSelected.update(value => !value);
  }
}
