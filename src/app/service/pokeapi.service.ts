import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environmnet } from 'src/environment/environment';
import { Observable, throwError } from 'rxjs';

export const Base_URL = environmnet.baseUrl;

const getPokemon = Base_URL + 'pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private _http: HttpClient) {}

  getPokemon(limit: number, offset: number): Observable<any> {
    // let param = new HttpParams().set('limit', 10);
    return this._http.get(getPokemon + '?' + `limit=${limit}&offset=${offset}`);
  }

  getAdditionalInfo(name: string): Observable<any> {
    return this._http.get(getPokemon + '/' + `${name}`);
  }
}
