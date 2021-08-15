import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../shared/interfaces/IMovies.interface';
import { IResponse } from '../shared/interfaces/IResponse.interface';

export type IRes = IResponse<{ movies: IMovie[] }>;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(genre: string = '', year: string = ''): Observable<IRes> {
    return this.http.get<IRes>(`/api/v1/movies?g=${genre}&y=${year}`);
  }
}
