import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MoviesRoutingModule } from './movies-routing.module';
import { MainComponent } from './pages/main/main.component';
import { moviesEffects } from './store/effects/moviesEffects';
import { movieReducer } from './store/redusers';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [MainComponent, MoviesListComponent, MovieComponent, HeaderComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', movieReducer),
    EffectsModule.forFeature([moviesEffects]),
  ],
  exports: [CommonModule],
})
export class MoviesModule {}
