
import { TestBed } from '@angular/core/testing';
import { Movies } from './movies';

describe('Movies - Filtros', () => {
  let component: Movies;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movies],
    }).compileComponents();

    component = TestBed.createComponent(Movies).componentInstance;
  });

  it('debe mostrar todas las películas inicialmente', () => {
    expect(component.filteredMovies().length).toBe(12);
  });

  it('debe filtrar por título', () => {
    component.filterForm.patchValue({ title: 'Interstellar' });

    expect(component.filteredMovies().length).toBe(1);
    expect(component.filteredMovies()[0].title).toBe('Interstellar');
  });

  it('debe filtrar por director', () => {
    component.filterForm.patchValue({ director: 'Nolan' });

    expect(component.filteredMovies().length).toBe(3);
  });

  it('debe filtrar por productor', () => {
    component.filterForm.patchValue({ producer: 'Emma Thomas' });

    expect(component.filteredMovies().length).toBe(3);
  });

  it('debe filtrar por género', () => {
    component.filterForm.patchValue({ genre: 'Musical' });

    expect(component.filteredMovies().length).toBe(1);
    expect(component.filteredMovies()[0].title).toBe('La La Land');
  });

  it('debe filtrar por año', () => {
    component.filterForm.patchValue({ year: '1994' });

    expect(component.filteredMovies().length).toBe(3);
  });

  it('debe combinar varios filtros', () => {
    component.filterForm.patchValue({
      director: 'Nolan',
      year: '2014',
    });

    expect(component.filteredMovies().length).toBe(1);
    expect(component.filteredMovies()[0].title).toBe('Interstellar');
  });

  it('debe ignorar mayúsculas y minúsculas', () => {
    component.filterForm.patchValue({ title: 'INTERSTELLAR' });

    expect(component.filteredMovies().length).toBe(1);
  });

  it('debe mostrar cero resultados si no hay coincidencias', () => {
    component.filterForm.patchValue({ title: 'Película inexistente' });

    expect(component.filteredMovies().length).toBe(0);
  });

  it('debe restaurar los resultados al limpiar filtros', () => {
    component.filterForm.patchValue({ director: 'Nolan' });
    component.clearFilters();

    expect(component.filteredMovies().length).toBe(12);
  });
});
