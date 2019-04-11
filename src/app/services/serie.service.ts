import { HttpClient } from '@angular/common/http';
import { BaseService } from './base/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SerieService extends BaseService {

  constructor(httpClient: HttpClient) {
      super(httpClient);
  }

  getDiscover() {
    return this._httpClient.get(`${this.URL}discover/tv?api_key=${this.API_KEY}&language=pt-BR`)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}tv/${id}?api_key=${this.API_KEY}&language=pt-BR`)
  }

  getCastById(id: string) {
    return this._httpClient.get(`${this.URL}tv/${id}/credits?api_key=${this.API_KEY}&language=pt-BR`)
  }
}
