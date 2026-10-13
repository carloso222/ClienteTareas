
import { Injectable, computed, signal } from '@angular/core';
import { Movie } from '../models/movies.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {

  // Estado de favoritos almacenado únicamente en memoria
  private readonly favoriteIds = signal<ReadonlySet<number>>(
    new Set<number>()
  );

  // Permite consultar los IDs favoritos sin modificarlos directamente
  readonly favorites = this.favoriteIds.asReadonly();

  // Cantidad total de películas favoritas
  readonly favoritesCount = computed(() => this.favoriteIds().size);

  // Agregar una película a favoritos
  addFavorite(id: number): void {
    this.favoriteIds.update((current) => {
      const updated = new Set(current);
      updated.add(id);
      return updated;
    });
  }

  // Eliminar una película de favoritos
  removeFavorite(id: number): void {
    this.favoriteIds.update((current) => {
      const updated = new Set(current);
      updated.delete(id);
      return updated;
    });
  }

  // Verificar si una película es favorita
  isFavorite(id: number): boolean {
    return this.favoriteIds().has(id);
  }

  // Obtener la lista de películas favoritas
  getFavorites(movies: Movie[]): Movie[] {
    return movies.filter((movie) =>
      this.favoriteIds().has(movie.id)
    );
  }

  // Agregar o quitar una película dependiendo de su estado
  toggleFavorite(id: number): void {
    if (this.isFavorite(id)) {
      this.removeFavorite(id);
    } else {
      this.addFavorite(id);
    }
  }
}
