import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-cart',
  template: `
    <p>Price: {{ price() }}</p>
    <p>Quantity: {{ quantity() }}</p>
    <p>Total: {{ total() }}</p>

    <button (click)="updatePrice()">Update Price</button>
    <button (click)="updateQuantity()">Update Quantity</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalCartComponent {
  price = signal(10);
  quantity = signal(2);

  total = computed(() => this.price() * this.quantity());

  updatePrice() {
    this.price.set(20);
  }

  updateQuantity() {
    this.quantity.update((value) => value + 1);
  }
}
