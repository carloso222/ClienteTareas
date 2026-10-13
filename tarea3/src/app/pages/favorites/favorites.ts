import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MovieService } from '../../shared/services/movie';
import { FavoritesService } from '../../shared/services/favorites';
import { MovieCard } from '../../shared/components/movie-card/movie-card';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterLink, MovieCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites {
  private readonly movieService = inject(MovieService);
  readonly favoritesService = inject(FavoritesService);

  readonly favoriteMovies = computed(() =>
    this.favoritesService.getFavorites(this.movieService.getMovies())
  );

  removeFavorite(id: number): void {
    this.favoritesService.removeFavorite(id);
  }
}