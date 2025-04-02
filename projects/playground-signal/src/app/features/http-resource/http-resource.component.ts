import { Component } from '@angular/core';

import { WeatherInfoComponent } from './ui/weather-info.component';

@Component({
  imports: [WeatherInfoComponent],
  template: `<app-weather-info />`,
})
export class HttpResourceComponent {}
