import {
  ChangeDetectionStrategy,
  Component,
  inject,
  linkedSignal,
  ResourceStatus,
  WritableSignal
} from '@angular/core';
import { MovieComponent } from '../../movie/movie.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MovieStore } from '../../movie.store';
import { Movie } from '../../movie.model';

@Component({
  selector: 'app-recently-watched',
  standalone: true,
  imports: [MovieComponent, MatProgressSpinner],
  templateUrl: 'recently-watched.component.html',
  styleUrl: 'recently-watched.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentlyWatchedComponent {
  protected store = inject(MovieStore);
  protected readonly status = ResourceStatus;
  protected recentlyWatched: WritableSignal<Movie[] | undefined> = linkedSignal({
    source: this.store.moviesResource.value,
    computation: movies => movies && movies.filter(({isWatched}) => isWatched)
  })
}
