import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopRatedContainerComponent } from './top-rated-container/top-rated-container.component';
import { RecentlyWatchedComponent } from './recently-watched/recently-watched.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopRatedContainerComponent, RecentlyWatchedComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <app-top-rated-container />
      <app-recently-watched />
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class HomeComponent {}
