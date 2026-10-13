import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { MovieService } from '../../shared/services/movie';
import { FavoritesService } from '../../shared/services/favorites';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss',
})
export class MovieDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly movieService = inject(MovieService);

  readonly favoritesService = inject(FavoritesService);

  private readonly movieId = toSignal(
    this.route.paramMap.pipe(
      map((params) => Number(params.get('id')))
    )
  );

  readonly movie = computed(() => {
    const id = this.movieId();

    if (!id || !Number.isInteger(id)) {
      return undefined;
    }

    return this.movieService.getMovieById(id);
  });

  toggleFavorite(): void {
    const movie = this.movie();

    if (movie) {
      this.favoritesService.toggleFavorite(movie.id);
    }
  }
}