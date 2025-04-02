import { Component } from '@angular/core';

@Component({
  imports: [
    // --
    // HighlightsDirective,
    // HeadingDirective,
    // TextColorDirective,
    // PanelComponent,
  ],
  template: `
    <h1 app-heading color="text">Hello from {{ name }}!</h1>
    <h2 app-heading color="primary">Heading 2</h2>
    <h3 app-heading color="success">Heading 3</h3>
    <h4 app-heading color="warning">Heading 4</h4>

    <!-- <hr style="margin: 2rem 0" />

    <section>
      <p>
        Uso il tag <code>&#60;mark&#62;</code> per avere del
        <mark app-highlights textColor="danger" state="danger">testo evidenziato</mark>
      </p>

      <code> &#60;mark app-highlights textColor="danger" state="danger"&#62;testo evidenziato&#60;/mark&#62; </code>
    </section> -->

    <!--<hr style="margin: 2rem 0" />

    <app-panel color="success" textColor="primary" backgroundColor="primary">
      <h2>Heading 2</h2>

      <ul app-text>
        <li>Curabitur dignissim nunc non sagittis lobortis</li>
        <li>Cras a sem elementum, iaculis augue id, placerat justo</li>
        <li>Mauris quis mauris sit amet ipsum finibus elementum vitae commodo est</li>
      </ul>

      <p>
        Ut tincidunt commodo nulla, nec faucibus libero vestibulum et. Nulla ac laoreet ante. Curabitur consectetur mi
        nec metus dictum placerat. Sed in lacus pellentesque, blandit tortor a, suscipit justo. Donec egestas tincidunt
        ex, vel iaculis justo sagittis a. Nulla pellentesque iaculis eros nec placerat. Praesent pretium, libero vel
        egestas mattis, diam dui lobortis magna, non euismod ipsum sem eu lorem. Maecenas dignissim finibus tellus.
        Morbi quis risus vitae dui viverra accumsan. Quisque facilisis maximus elit vitae ornare. Nulla dapibus
        consequat erat.
      </p>
    </app-panel> -->
  `,
  styles: ``,
})
export class DirectiveCompositionComponent {
  name = 'Directive Composition API';
}
