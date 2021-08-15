import { createAction, props } from '@ngrx/store';
import { IMovie } from '../../../shared/interfaces/IMovies.interface';
import { ActionType } from '../types/action-types';

export const getMoviesSuccessAction = createAction(
  ActionType.GET_SUCCESS,
  props<{ movies: IMovie[] }>()
);
