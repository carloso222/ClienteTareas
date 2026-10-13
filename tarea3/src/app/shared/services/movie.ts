import { Injectable } from '@angular/core';
import { Movie } from '../models/movies.model';
import { MOVIES } from '../data/movie.data';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMovies(): Movie[] {
    return MOVIES;
  }

  getMovieById(id: number): Movie | undefined {
    return MOVIES.find((movie) => movie.id === id);
  }
}