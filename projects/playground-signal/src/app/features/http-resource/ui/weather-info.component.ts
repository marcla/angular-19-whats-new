import { ChangeDetectionStrategy, Component, Injectable, signal } from '@angular/core';

interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
}

@Injectable()
class WeatherService {
  // getData(): Promise<WeatherData> {
  //   const controller = new AbortController();
  //   const request = new Request("assets/weather.json", {
  //     signal: controller.signal,
  //   });
  //   return fetch(request);
  //   // return fetch('assets/weather.json', { signal: abortSignal }).then((r) =>
  //   // );
  // }
}

@Component({
  selector: 'app-weather-info',
  imports: [],
  template: `
    <div class="card bg-base-200 w-96 shadow-xl mx-auto">
      <!-- <div class="card-body flex flex-col items-center gap-4">
        <button class="btn btn-block btn-primary btn-outline" (click)="weatherResource.reload()">
          Get Weather Info
        </button>

        @if (isLoading()) {
          <span class="loading loading-spinner loading-lg"></span>
        } @else if (weatherResource.value()) {
          <img [src]="weatherResource.value()?.icon" class="w-20 object-fit" alt="weather icon" />
          <p class="text-2xl">Temperature: {{ weatherResource.value()?.temperature }}</p>
          <p class="text-xl">Condition: {{ weatherResource.value()?.condition }}</p>
        }
      </div> -->
    </div>
  `,
  providers: [WeatherService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherInfoComponent {
  isLoading = signal(true);
}
