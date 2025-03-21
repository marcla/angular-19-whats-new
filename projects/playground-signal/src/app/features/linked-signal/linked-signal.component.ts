import { Component, effect, signal } from '@angular/core';

/**
 * - provare ad utilizzare computed() per risolvere il problema
 * - utilizzare linkedSignal(() => ...)
 * - utilizzare linkedSignal({ ... }) con valore precedente
 */

@Component({
  template: `
    <div class="demo-container">
      <h1>Shopping Cart</h1>

      <div class="form-control">
        <label>Select product</label>

        <select [value]="selectedCourse()" (change)="onCourseSelected(course.value)" #course>
          <option value=""></option>
          @for (course of courses; track course.code) {
            <option [value]="course.code" [selected]="course.code === selectedCourse()">
              {{ course.title }}
            </option>
          }
        </select>
      </div>

      <p class="form-control">
        <label>Quantity</label>

        <input type="number" [value]="quantity()" (change)="onQuantityChanged(input.value)" #input />
      </p>

      <div class="form-actions">
        <button class="btn" (click)="onArticleAdded()">Add To Cart</button>
      </div>
    </div>
  `,
})
export class LinkedSignalComponent {
  readonly courses = [
    {
      code: 'BANANAS_10',
      title: 'Bananas',
      defaultQuantity: 10,
    },
    {
      code: 'APPLE_20',
      title: 'Apple',
      defaultQuantity: 20,
    },
    {
      code: 'ORANGES_30',
      title: 'Oranges',
      defaultQuantity: 30,
    },
  ];

  selectedCourse = signal<string | null>('BANANAS_10');
  quantity = signal(0);

  constructor() {
    effect(() => {
      const selectedCourse = this.selectedCourse();
      const quantity = this.courses.find((c) => c.code === selectedCourse)?.defaultQuantity ?? 1;

      this.quantity.set(quantity);
    });
  }

  onQuantityChanged(quantity: string) {
    this.quantity.set(parseInt(quantity));
  }

  onCourseSelected(courseCode: string) {
    this.selectedCourse.set(courseCode);
  }

  onArticleAdded() {
    throw new Error('Method not implemented.');
  }
}
