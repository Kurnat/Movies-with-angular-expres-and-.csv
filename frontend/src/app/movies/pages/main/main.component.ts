import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesService } from '../../../services/movies.service';
import { IAppState } from '../../../shared/interfaces/IAppState.interface';
import { IMovie } from '../../../shared/interfaces/IMovies.interface';
import { getMoviesAction } from '../../store/actions/getMovieAction';
import {
  allMoviesSelector,
  isMoviesLoadingSelector,
} from '../../store/selectors/getMoviesSelector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isMoviesLoading$?: Observable<boolean>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initializeValue();
  }

  initializeValue() {
    this.store.dispatch(getMoviesAction({ genre: '', year: '' }));
    this.isMoviesLoading$ = this.store.pipe(select(isMoviesLoadingSelector));
  }
}
