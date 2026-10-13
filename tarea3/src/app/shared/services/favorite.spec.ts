
import { TestBed } from '@angular/core/testing';
import { FavoritesService } from './favorites';
import { MovieService } from './movie';

describe('FavoritesService', () => {
  let service: FavoritesService;
  let movieService: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(FavoritesService);
    movieService = TestBed.inject(MovieService);
  });

  it('should start with no favorites', () => {
    expect(service.favoritesCount()).toBe(0);
    expect(service.getFavorites(movieService.getMovies())).toEqual([]);
  });

  it('should add a movie to favorites', () => {
    service.addFavorite(1);

    expect(service.isFavorite(1)).toBe(true);
    expect(service.favoritesCount()).toBe(1);
  });

  it('should not duplicate favorites', () => {
    service.addFavorite(1);
    service.addFavorite(1);

    expect(service.favoritesCount()).toBe(1);
  });

  it('should remove a movie from favorites', () => {
    service.addFavorite(1);
    service.removeFavorite(1);

    expect(service.isFavorite(1)).toBe(false);
    expect(service.favoritesCount()).toBe(0);
  });

  it('should toggle the favorite state', () => {
    service.toggleFavorite(2);
    expect(service.isFavorite(2)).toBe(true);

    service.toggleFavorite(2);
    expect(service.isFavorite(2)).toBe(false);
  });

  it('should return only favorite movies', () => {
    service.addFavorite(1);
    service.addFavorite(3);

    const favorites = service.getFavorites(movieService.getMovies());

    expect(favorites.length).toBe(2);
    expect(favorites.map((movie) => movie.id)).toEqual([1, 3]);
  });
});
