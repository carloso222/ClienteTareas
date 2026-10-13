import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../models/movies.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  @Input({ required: true }) movie!: Movie;
  @Input() isFavorite = false;

  @Output() favoriteToggle = new EventEmitter<number>();

  onToggleFavorite(): void {
    this.favoriteToggle.emit(this.movie.id);
  }
}