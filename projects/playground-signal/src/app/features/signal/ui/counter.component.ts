import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * - add power counter
 * - add increment by 2
 * - add increment by 4
 * - add odd / event
 * - randomize initial value
 * - create a service
 * - add a setInterval
 */

/* @Component({
  selector: 'app-signal-counter',
  template: `
    <p>Count: {{ count() }}</p>

    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalCounterComponent {
  count = signal(0);

  increment() {
    this.count.update((value) => value + 1);
  }

  reset() {
    this.count.set(0);
  }
} */

@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ count }}</p>

    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count = this.count + 1;
  }

  reset() {
    this.count = 0;
  }
}
