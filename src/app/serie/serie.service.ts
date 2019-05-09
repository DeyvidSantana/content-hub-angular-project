import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/base/base.service';

@Injectable()
export class SerieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getDiscover() {
    return this._httpClient.get(`${this.URL}program/tvs/`)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}program/tvs/${id}`)
  }

  findTvByTitle(title: string){
    return this._httpClient.get(`${this.URL}program/tvs/title/${title}`)
  }

  findTvByLanguage(language: string){
    return this._httpClient.get(`${this.URL}program/tvs/language/${language}`)
  }

  findTvByReleaseYear(releaseYear: string){
    return this._httpClient.get(`${this.URL}program/tvs/date/${releaseYear}`)
  }

  updateTv(id, tv){
    return this._httpClient.put(`${this.URL}program/update/tv/${id}`, tv);
  }
}