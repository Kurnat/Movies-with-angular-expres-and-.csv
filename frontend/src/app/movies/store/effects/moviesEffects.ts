import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MoviesService } from '../../../services/movies.service';
import { getMoviesAction } from '../actions/getMovieAction';
import { getMoviesFailureAction } from '../actions/getMoviesFailureAction';
import { getMoviesSuccessAction } from '../actions/getMoviesSuccessAction';

@Injectable()
export class moviesEffects {
  movies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMoviesAction),
      switchMap(({ genre, year }) =>
        this.moviesService.getMovies(genre, year).pipe(
          map((data) =>
            data.success
              ? getMoviesSuccessAction({ movies: data.data.movies })
              : getMoviesFailureAction({ errorMessage: data.error!.message })
          ),
          catchError((err) =>
            of(getMoviesFailureAction({ errorMessage: err.error.messge }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
