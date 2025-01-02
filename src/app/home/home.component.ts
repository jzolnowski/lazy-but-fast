import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopRatedContainerComponent } from './top-rated-container/top-rated-container.component';
import { RecentlyWatchedComponent } from './recently-watched/recently-watched.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopRatedContainerComponent, RecentlyWatchedComponent, MatProgressSpinner],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <app-top-rated-container />
      @defer (hydrate on viewport) {
        <app-recently-watched />
      } @placeholder {
        <mat-spinner [diameter]="40"></mat-spinner>
      }
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class HomeComponent {}
