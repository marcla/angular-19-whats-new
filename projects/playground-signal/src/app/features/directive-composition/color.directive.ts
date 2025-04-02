import { Directive, HostBinding, Input, OnInit } from '@angular/core';


const THEME_PALETTE = ['text', 'accent', 'primary', 'success', 'warning', 'danger'] as const;
export type ThemePalette = (typeof THEME_PALETTE)[number];

const DEFAULT_TEXT_COLOR = '#000000' as const;
const COLOR_MAP: Record<ThemePalette, string> = {
  [THEME_PALETTE[0]]: '#454545',
  [THEME_PALETTE[1]]: '#DFFF00',
  [THEME_PALETTE[2]]: '#6495ED',
  [THEME_PALETTE[3]]: '#40E0D0',
  [THEME_PALETTE[4]]: '#FFBF00',
  [THEME_PALETTE[5]]: '#DE3163',
};

@Directive({
  selector: '[app-text]',
})
export class TextColorDirective implements OnInit {
  @Input() color: ThemePalette = 'text';

  @HostBinding('style.color')
  textColor = '';

  ngOnInit(): void {
    this.textColor = COLOR_MAP[this.color] ?? DEFAULT_TEXT_COLOR;
  }
}

// ---

/* @Directive({})
export class BackgroundColorDirective implements OnInit {
  @Input() color: ThemePalette = 'accent';

  @HostBinding('style.backgroundColor')
  backgroundColor = '';

  ngOnInit(): void {
    const hex = COLOR_MAP[this.color];
    let backgroundColor = 'transparent';

    if (hex) {
      backgroundColor = Color(hex).lighten(0.47).hex();
    }

    this.backgroundColor = backgroundColor;
  }
} */

// ---

/* @Directive({
  selector: 'h1[app-heading], h2[app-heading], h3[app-heading], h4[app-heading], h5[app-heading], h6[app-heading]',
  hostDirectives: [{ directive: TextColorDirective, inputs: ['color'] }],
})
export class HeadingDirective {} */

// ---

/* @Directive({
  selector: 'mark[app-highlights]',
  host: {
    '[style.padding-left.px]': '3',
    '[style.padding-right.px]': '3',
  },
  hostDirectives: [
    { directive: TextColorDirective, inputs: ['color: textColor'] },
    { directive: BackgroundColorDirective, inputs: ['color: state'] },
  ],
})
export class HighlightsDirective {} */
