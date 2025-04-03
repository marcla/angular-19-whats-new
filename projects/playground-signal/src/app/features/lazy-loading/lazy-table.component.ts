import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-table',
  standalone: true,
  template: `<h2>Tabella Lazy</h2>`,
})
export class LazyTableComponent {
  @Input() data!: string;
}
