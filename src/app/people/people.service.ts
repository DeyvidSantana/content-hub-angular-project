import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/base/base.service';

@Injectable()
export class PeopleService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getDiscover() {
    return this._httpClient.get(`${this.URL}people/`)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}people/${id}`)
  }

  findPeopleByName(title: string){
    return this._httpClient.get(`${this.URL}people/name/${title}`)
  }
}