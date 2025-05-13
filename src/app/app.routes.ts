import { Routes } from '@angular/router';


export const routes: Routes = [

  { path: 'home',
    loadComponent:()=> import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'search',
    loadComponent: () => import('./components/search/search.component').then(m => m.SearchComponent)
  },
  {
    path: 'artistt',
    loadComponent: () => import('./components/artist/artist.component').then(m => m.ArtistComponent)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }

];
