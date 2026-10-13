import { Routes } from '@angular/router';

import { Movies } from './pages/movies/movies';
import { MovieDetail } from './pages/movie-detail/movie-detail';
import { Favorites } from './pages/favorites/favorites';

export const routes: Routes = [
  {
    path: '',
    component: Movies,
  },
  {
    path: 'movies/:id',
    component: MovieDetail,
  },
  {
    path: 'favorites',
    component: Favorites,
  },
  {
    path: '**',
    redirectTo: '',
  },
];