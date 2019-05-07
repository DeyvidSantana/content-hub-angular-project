import { BaseService } from '../services/base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getDiscover() {    
    return this._httpClient.get(`${this.URL}program/movies/`)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}program/movies/${id}`)
  }

  findMovieByTitle(title: string){
    return this._httpClient.get(`${this.URL}program/movies/title/${title}`)
  }
  
}
