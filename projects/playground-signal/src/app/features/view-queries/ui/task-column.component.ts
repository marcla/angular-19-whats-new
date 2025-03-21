import { ChangeDetectionStrategy, Component, computed, inject, Injectable, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type TodoTask = {
  done: boolean;
  description: string;
};

@Injectable()
export class TaskStoreService {
  readonly tasks = signal<TodoTask[]>([
    { done: false, description: `Curabitur viverra purus in est consectetur pretium.` },
    { done: false, description: `Quisque eu ex mattis, elementum purus ac, pellentesque nulla.` },
    { done: false, description: `Integer tristique nulla vitae tellus convallis imperdiet.` },
    { done: false, description: `Aliquam eget eros eu enim finibus consectetur id blandit tortor.` },
  ]);

  readonly count = computed<number>(() => this.tasks().length);
}

@Component({
  selector: 'app-task-column',
  imports: [FormsModule],
  template: `
    <h3>TODOs</h3>

    <ul>
      @for (item of tasks; track $index) {
        <li>{{ item.description }}</li>
      }
    </ul>

    <form (submit)="handleAddTask()">
      <input
        [ngModel]="newTaskDescription()"
        (ngModelChange)="newTaskDescription.set($event)"
        type="text"
        name="task"
      />
    </form>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  providers: [TaskStoreService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskColumnComponent {
  readonly #store = inject(TaskStoreService);

  newTaskDescription = model<string>('');

  get tasks(): TodoTask[] {
    return [...this.#store.tasks()];
  }

  handleAddTask() {
    if (this.newTaskDescription().trim()) {
      const newTask: TodoTask = {
        done: false,
        description: this.newTaskDescription(),
      };

      this.#store.tasks.set([...this.#store.tasks(), newTask]);
      this.newTaskDescription.set('');
    }
  }
}
