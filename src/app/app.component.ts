import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <app-toolbar />
      <router-outlet />
    </div>
  `,
  styles: [`
    .container {
      background-color: rgba(0, 0, 0, 0.6);
    }
  `]
})
export class AppComponent {}
