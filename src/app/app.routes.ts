import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: '', loadChildren: () => import('./main-layout.route')},
  {path: '**', redirectTo: '/accueil', pathMatch: 'full'}
];
