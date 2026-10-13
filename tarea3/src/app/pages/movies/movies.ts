import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../../shared/services/movie';
import { FavoritesService } from '../../shared/services/favorites';
import { MovieCard } from '../../shared/components/movie-card/movie-card';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [ReactiveFormsModule, MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {
  private readonly movieService = inject(MovieService);
  readonly favoritesService = inject(FavoritesService);
  private readonly fb = inject(FormBuilder);

  readonly movies = this.movieService.getMovies();

  readonly filterForm = this.fb.nonNullable.group({
    title: '',
    director: '',
    producer: '',
    genre: '',
    year: '',
  });

  private readonly filters = signal(this.filterForm.getRawValue());

  readonly filteredMovies = computed(() => {
    const filters = this.filters();

    return this.movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filters.title.trim().toLowerCase()) &&
        movie.director.toLowerCase().includes(filters.director.trim().toLowerCase()) &&
        movie.producer.toLowerCase().includes(filters.producer.trim().toLowerCase()) &&
        movie.genre.toLowerCase().includes(filters.genre.trim().toLowerCase()) &&
        movie.year.toString().includes(filters.year.trim())
      );
    });
  });

  constructor() {
    this.filterForm.valueChanges.subscribe(() => {
      this.filters.set(this.filterForm.getRawValue());
    });
  }

  clearFilters(): void {
    this.filterForm.reset();
  }

  toggleFavorite(id: number): void {
    this.favoritesService.toggleFavorite(id);
  }
}