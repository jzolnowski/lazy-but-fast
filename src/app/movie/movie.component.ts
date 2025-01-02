import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MovieComponent {
  movie = input.required<Movie>();
  isPriority = input<boolean>(false);
}
