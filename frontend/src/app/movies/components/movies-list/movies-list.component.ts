import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../shared/interfaces/IAppState.interface';
import { IMovie } from '../../../shared/interfaces/IMovies.interface';
import { allMoviesSelector } from '../../store/selectors/getMoviesSelector';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies$?: Observable<IMovie[]>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initializeValue();
  }

  initializeValue(): void {
    this.movies$ = this.store.pipe(select(allMoviesSelector));
  }
}
