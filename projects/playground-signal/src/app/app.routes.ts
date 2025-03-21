import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signal',
    title: 'signal()',
    loadComponent: () => import('./features/signal/page-signal.component').then((c) => c.PageSignalComponent),
  },
  {
    path: 'input-signal',
    title: 'Custom Event (Input & Output)',
    loadComponent: () => import('./features/input-signal/input-signal.component').then((c) => c.InputSignalComponent),
  },
  {
    path: 'view-queries',
    title: 'View queries',
    loadComponent: () => import('./features/view-queries/view-queries.component').then((c) => c.ViewQueriesComponent),
  },
  {
    path: 'linked-signal',
    title: 'Linked Signal',
    loadComponent: () =>
      import('./features/linked-signal/linked-signal.component').then((c) => c.LinkedSignalComponent),
  },
];
