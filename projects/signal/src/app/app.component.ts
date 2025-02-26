import { Component } from '@angular/core';

import { CounterComponent, SignalCounterComponent } from './ui/components';

@Component({
  selector: 'app-root',
  imports: [SignalCounterComponent, CounterComponent],
  template: `
    <h1>Hello from {{ title }}!</h1>

    <h2>Signal</h2>
    <app-signal-counter />
    <app-counter />
  `,
})
export class AppComponent {
  title = 'signal';
}
