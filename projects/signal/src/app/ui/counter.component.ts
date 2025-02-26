import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

/**
 * - add power counter
 * - add increment by 2
 * - add increment by 4
 * - add odd / event
 */

@Component({
  selector: 'app-signal-counter',
  standalone: true,
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
}

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <p>Count: {{ count.value }}</p>

    <button (click)="increment()">Increment</button>
    <button (click)="reset()">Reset</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  count = { value: 0 };

  increment() {
    this.count.value = this.count.value + 1;
  }

  reset() {
    this.count.value = 0;
  }
}
