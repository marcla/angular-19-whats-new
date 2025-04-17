import { Component } from '@angular/core';

import { MovieInfoComponent } from './ui/movie-info.component';

@Component({
  imports: [MovieInfoComponent],
  template: `<app-movie-info />`,
})
export class HttpResourceComponent {}
