import { createAction, props } from '@ngrx/store';
import { ActionType } from '../types/action-types';

export const getMoviesAction = createAction(
  ActionType.GET,
  props<{ genre: string; year: string }>()
);
