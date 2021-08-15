import { createReducer, on } from '@ngrx/store';
import { getMoviesAction } from './actions/getMovieAction';
import { getMoviesFailureAction } from './actions/getMoviesFailureAction';
import { getMoviesSuccessAction } from './actions/getMoviesSuccessAction';
import { IMoviesState } from './types/IMoviesState.interface';

const initialState: IMoviesState = {
  errorMessage: undefined,

  isLoading: false,
  movies: [],
};

export const movieReducer = createReducer(
  initialState,
  on(getMoviesAction, (state: IMoviesState) => ({
    ...state,
    errorMessage: undefined,
    isLoading: true,
  })),
  on(getMoviesSuccessAction, (state: IMoviesState, { movies }) => ({
    ...state,
    isLoading: false,
    errorMessage: undefined,
    movies,
  })),
  on(getMoviesFailureAction, (state: IMoviesState, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage,
  }))
);
