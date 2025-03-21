import { ChangeDetectionStrategy, Component, QueryList, ViewChildren } from '@angular/core';
import { TaskColumnComponent, TaskStoreService } from './ui/task-column.component';

/**
 * - accedere all'elemento all'interno di ngOnInit
 * - leggere il service TaskStoreService presente nell'elemento con read e senza
 * - ciclare sui risultati
 * - convertire in signal
 * - crea un contatore globale dei task nelle colonne
 */

@Component({
  selector: 'app-view-children',
  imports: [TaskColumnComponent],
  template: `
    <app-task-column />
    <app-task-column />
    <app-task-column />
  `,
  styles: `
    :host {
      display: flex;
      gap: 16px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewChildrenComponent {
  @ViewChildren(TaskStoreService) taskColumns!: QueryList<TaskStoreService>;

  constructor() {
    console.log(`constructor()`, this.taskColumns);
  }

  ngOnInit(): void {
    console.log(`ngOnInit()`, this.taskColumns);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit()`, this.taskColumns);
  }
}
