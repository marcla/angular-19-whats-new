import { Component } from '@angular/core';

import { ViewChildComponent } from './view-child.component';
import { ViewChildrenComponent } from './view-children.component';

@Component({
  imports: [ViewChildComponent, ViewChildrenComponent],
  template: `
    <app-view-child />

    @if (hide) {
      <app-view-children />
    }
  `,
})
export class ViewQueriesComponent {
  hide = false;
}
