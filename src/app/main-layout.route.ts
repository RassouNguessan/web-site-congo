import {Routes} from "@angular/router";
import MainLayoutComponent from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    providers: [],
    children: [
      {
        path: 'accueil',
        canActivate: [],
        loadComponent: () => import('./pages/home/home.component')
      },
    ]
  }
]

export default routes
