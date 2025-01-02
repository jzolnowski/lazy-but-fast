import { ChangeDetectionStrategy, Component, inject, linkedSignal, ResourceStatus } from '@angular/core';
import { MovieComponent } from '../../movie/movie.component';
import { MovieStore } from '../../movie.store';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-top-rated-container',
  standalone: true,
  imports: [MovieComponent, MatProgressSpinner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'top-rated-container.component.html',
  styleUrl: 'top-rated-container.component.scss',
})
export class TopRatedContainerComponent {
  protected store = inject(MovieStore);
  protected readonly status = ResourceStatus;
  protected topRatedMovies = linkedSignal({
    source: this.store.moviesResource.value,
    computation: movies => movies && movies.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 8)
  })
}
