import { IMovie } from '../../../shared/interfaces/IMovies.interface';

export interface IMoviesState {
  errorMessage?: string;

  isLoading: boolean;
  movies: IMovie[];
}
