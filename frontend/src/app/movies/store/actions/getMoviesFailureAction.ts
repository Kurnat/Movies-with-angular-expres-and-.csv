import { createAction, props } from '@ngrx/store';
import { ActionType } from '../types/action-types';

export const getMoviesFailureAction = createAction(
  ActionType.GET_FAILURE,
  props<{ errorMessage: string }>()
);
