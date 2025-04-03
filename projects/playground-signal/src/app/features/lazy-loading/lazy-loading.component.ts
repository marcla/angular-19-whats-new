import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  imports: [],
  template: `
    <button (click)="loadTable()">Carica Tabella</button>
    <ng-container #container></ng-container>
  `,
  styles: ``,
})
export class LazyLoadingComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  async loadTable() {
    this.container.clear();

    const { LazyTableComponent } = await import('./lazy-table.component'); // ← Qui viene importato il componente
    const componentRef = this.container.createComponent(LazyTableComponent); // ← Qui viene creato il componente

    componentRef.setInput('data', 'Dati caricati dinamicamente!'); // ← Qui riceve i valori dell'input
  }
}
