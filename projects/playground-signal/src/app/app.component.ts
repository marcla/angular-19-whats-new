import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      @for (item of menuItems; track $index) {
        <a [routerLink]="item.path">{{ item.title }}</a>
      }
    </nav>

    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
      nav {
        display: flex;
        column-gap: 16px;
        border-bottom: 1px solid #333;
        padding-bottom: 12px;
        margin-bottom: 12px;
      }
    `,
  ],
})
export class AppComponent {
  readonly menuItems = routes.map((r) => ({ path: r.path, title: r.title }));
}
