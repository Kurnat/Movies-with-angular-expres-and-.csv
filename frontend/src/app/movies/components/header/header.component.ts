import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../shared/interfaces/IAppState.interface';
import { getMoviesAction } from '../../store/actions/getMovieAction';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  genres = ['all', 'action', 'fantasy', 'family', 'drama', 'comedy'];
  years = ['all', '1975', '2020', '2011', '2015', '2000', '2012'];

  genre = '';
  year = '';

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {}

  getMoviesByGenre(genre: string) {
    this.genre = genre;
    this.store.dispatch(getMoviesAction({ genre, year: this.year }));
  }

  getMoviesByYear(year: string) {
    this.year = year;
    this.store.dispatch(getMoviesAction({ genre: this.genre, year }));
  }
}
