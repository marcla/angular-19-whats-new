import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  imports: [],
  template: `
    <div #listContainer style="height: 100px; overflow-y: auto; border: 1px solid black;">
      @for (item of items; track $index) {
        <div>{{ item }}</div>
      }
    </div>

    <button (click)="aggiungiElemento()">Aggiungi elemento</button>
  `,
  styles: ``,
})
export class LifecycleHooksComponent {
  @ViewChild('listContainer') listContainer!: ElementRef;
  items: string[] = [];

  private scrollToBottom = false;

  ngAfterViewChecked() {
    if (this.scrollToBottom) {
      this.listContainer.nativeElement.scrollTop = this.listContainer.nativeElement.scrollHeight;
      this.scrollToBottom = false; // Reset flag
    }
  }

  aggiungiElemento() {
    this.items.push(`Elemento ${this.items.length + 1}`);
    this.scrollToBottom = true; // Impostiamo il flag per scorrere in basso
  }
}
