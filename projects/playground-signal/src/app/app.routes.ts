import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signal',
    loadComponent: () => import('./features/signal/page-signal.component').then((c) => c.PageSignalComponent),
  },
  {
    path: 'input-signal',
    loadComponent: () => import('./features/input-signal/input-signal.component').then((c) => c.InputSignalComponent),
  },
  {
    path: 'view-queries',
    loadComponent: () => import('./features/view-queries/view-queries.component').then((c) => c.ViewQueriesComponent),
  },
];
