import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Movie } from '../../movie.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-expanded',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="movie-details-expand" [@slideDown]>
      <div class="info">
        <p>{{ movie().cast }}</p>
      </div>
      <p class="description">{{ movie().desc }}</p>
    </div>
  `,
  styles: `
    .movie-details-expand {
      padding: 20px;

      .description {
        font-size: 16px;
        line-height: 1.5;
        color: #b3b3b3;
        margin-bottom: 20px;
      }

      .info {
        padding-bottom: 10px;
        font-size: 20px;
        color: #e3e3e3;
      }
    }
  `,
  animations: [
    trigger('slideDown', [
      state('void', style({ height: '0', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class MovieExpandedComponent {
  movie = input.required<Movie>();
}
