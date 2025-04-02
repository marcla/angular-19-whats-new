import { Component } from '@angular/core';

import { ExampleDataComponent } from './example-data/example-data.component';

@Component({
  imports: [ExampleDataComponent],
  template: `
    <h1>Demo &#64;defer con chiamata API</h1>

    @defer (on interaction) {
      <app-example-data></app-example-data>
    } @placeholder {
      <button>🔍 Carica dati</button>
    }
  `,
})
export class DeferredComponent {}
