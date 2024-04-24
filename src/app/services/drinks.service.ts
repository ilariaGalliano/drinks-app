import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResult, DrinkResult } from '../interfaces/drink-interfaces';
import { Observable } from 'rxjs';

const BASE_URL = 'https://the-cocktail-db3.p.rapidapi.com';
let headers = new HttpHeaders({
  'x-rapidapi-key': 'ec2c10dd15mshd34214328de6941p1407d5jsn0c8d0631f35a',
'x-rapidapi-host': 'the-cocktail-db3.p.rapidapi.com'
});

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private http = inject(HttpClient)

  getDrinksList(): Observable<any> {
	return this.http.get<any>(`${BASE_URL}`, {
				headers: headers
			})
  }

  getDrinkDetails(id: string): Observable<DrinkResult> {
    return this.http.get<DrinkResult>(`${BASE_URL}/${id}`, {
      headers: headers
    });
  }
}
