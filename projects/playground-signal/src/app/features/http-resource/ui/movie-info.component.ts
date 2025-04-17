import { HttpClient, HttpParams, httpResource } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injectable,
  resource,
  ResourceRef,
  ResourceStatus,
  signal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieDetail } from './movie.model';

@Injectable()
class OmdbService {
  #http = inject(HttpClient);
  #baseUrl = 'https://www.omdbapi.com/?apikey=cf5186d5';

  getSearchMovieResource(query: () => string): ResourceRef<MovieDetail | undefined> {
    return resource({
      request: () => query(),
      loader: ({ request: movieId }) => fetch(`${this.#baseUrl}&i=${movieId}`).then((res: Response) => res.json()),
    });
  }

  getSearchMovieRxResource(query: () => string): ResourceRef<MovieDetail | undefined> {
    return rxResource({
      request: () => query(),
      loader: ({ request: movieId }) => this.fetchMovie(movieId),
      // loader: ({ request: movieId }) => this.#http.get<MovieDetail>(`${this.#baseUrl}&i=${movieId}`),
    });
  }

  getSearchMovieHttpResource(query: () => string): ResourceRef<MovieDetail | undefined> {
    return httpResource(() => `${this.#baseUrl}&i=${query()}`);
  }

  fetchMovie(query: string): Observable<MovieDetail> {
    const params = new HttpParams({
      fromObject: { i: query },
    });

    return this.#http.get<MovieDetail>(`${this.#baseUrl}`, { params });
  }
}

@Component({
  selector: 'app-movie-info',
  imports: [FormsModule],
  template: `
    <!-- <p>
      <select name="movie-list" id="movie-list" [(ngModel)]="movieId">
        @for (option of movieOptions; track option.value) {
          <option [value]="option.value">{{ option.description }}</option>
        }
      </select>
    </p> -->

    <p>
      <!-- <button (click)="handleChangeMovie()" type="button">Cambia film</button> -->
      <!-- <button (click)="handleChangeScore()" type="button">Incrementa punteggio</button> -->
    </p>

    <div class="result">
      @if (movieResource.isLoading()) {
        <span class="loading loading-spinner loading-lg">Loading...</span>
      } @else if (movieResource.error()) {
        <span class="error">Errore nel recupero dei dati</span>
      } @else if (movieResource.hasValue()) {
        Mostra il film
        <h2 class="text-2xl">Titolo: {{ movieResource.value().Title }}</h2>
        <h3 class="text-xl">Genere: {{ movieResource.value().Genre }}</h3>
        <p class="text-2xl">Anno: {{ movieResource.value().Year }}</p>
        <p class="text-2xl">Punteggio: {{ movieResource.value().Metascore }}</p>

        <img [src]="movieResource.value().Poster" [alt]="movieResource.value().Title" />
      } @else {
        <span>Nessun contenuto</span>
      }
    </div>
  `,
  providers: [OmdbService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieInfoComponent {
  readonly #omdb = inject(OmdbService);

  readonly movieOptions: Readonly<{ value: string; description: string }[]> = [
    { value: 'tt0095016', description: 'Die Hard' },
    { value: 'tt0099423', description: 'Die Hard 2' },
    { value: 'tt0112864', description: 'Die Hard with a Vengeance' },
  ];

  // readonly movieId = model<string>(this.movieOptions[0].value);
  readonly movieId = signal<string>(this.movieOptions[0].value);

  readonly movieResource = this.#omdb.getSearchMovieResource(this.movieId);

  effect = effect(() => {
    console.log({
      value: this.movieResource.value(),
      status: this.movieResource.status(),
      resourceStatus: ResourceStatus[this.movieResource.status()],
      error: this.movieResource.error(),
      isLoading: this.movieResource.isLoading(),
      hasValue: this.movieResource.hasValue(),
    });
  });

  /* handleChangeMovie() {
    this.movieId.set(this.movieOptions[1].value);
  } */

  /* handleChangeScore() {
    this.movieResource.update((movie) => {
      if (movie) {
        const currentScore = Number(movie.Metascore);
        movie.Metascore = String(currentScore + 1);
      }

      return movie;
    });
  } */
}
