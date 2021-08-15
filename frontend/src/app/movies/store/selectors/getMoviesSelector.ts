import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../../shared/interfaces/IAppState.interface';
import { IMoviesState } from '../types/IMoviesState.interface';

export const moviesFeatureSelector = createFeatureSelector<
  IAppState,
  IMoviesState
>('movies');

export const isMoviesLoadingSelector = createSelector(
  moviesFeatureSelector,
  (state) => state.isLoading
);

export const allMoviesSelector = createSelector(
  moviesFeatureSelector,
  (state) => state.movies
);
