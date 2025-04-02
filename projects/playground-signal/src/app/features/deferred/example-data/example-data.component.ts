import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable, signal } from '@angular/core';
import { delay, Observable } from 'rxjs';

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Posts> {
    return this.http.get<Posts>('https://jsonplaceholder.typicode.com/posts').pipe(delay(8000));
  }
}

@Component({
  selector: 'app-example-data',
  template: `
    @if (error()) {
      <div>⚠️ Errore nel caricamento dei dati</div>
    }

    @if (data().length > 0) {
      <ul>
        @for (item of data(); track $index) {
          <li>
            <strong>{{ item.title }}</strong>
          </li>
        }
      </ul>
    } @else {
      <div>⏳ Caricamento dati...</div>
    }
  `,
})
export class ExampleDataComponent {
  private dataService = inject(DataService);

  readonly data = signal<Posts>([]);
  readonly error = signal<boolean>(false);

  constructor() {
    this.dataService.getData().subscribe({
      next: (response) => this.data.set(response),
      error: () => this.error.set(true),
    });
  }
}
