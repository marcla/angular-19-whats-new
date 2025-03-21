import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { TaskColumnComponent } from './ui/task-column.component';

/**
 * - accedere all'elemento all'interno di ngOnInit
 * - leggere il service TaskStoreService presente nell'elemento con read e senza
 * - convertire in signal
 */

@Component({
  selector: 'app-view-child',
  imports: [TaskColumnComponent],
  template: ` <app-task-column /> `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild(TaskColumnComponent) taskColumn!: TaskColumnComponent;

  constructor() {
    console.log(`constructor()`, this.taskColumn);
  }

  ngOnInit(): void {
    console.log(`ngOnInit()`, this.taskColumn);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit()`, this.taskColumn);
  }
}
