import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: block;
        padding: 0 12px;

        border: 1px solid #454545;
        border-radius: 0.4rem;
      }
    `,
  ],
  // hostDirectives: [
  //   { directive: TextColorDirective, inputs: ['color: textColor'] },
  //   {
  //     directive: BackgroundColorDirective,
  //     inputs: ['color: backgroundColor'],
  //   },
  // ],
})
export class PanelComponent {}
