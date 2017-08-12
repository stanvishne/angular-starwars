import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Ship from '../models/ship';

@Injectable()
export class SwapiApiService {
  private apiUrl = 'https://swapi.co/api/';	
  private handleError(error: any): Promise<any> {
	console.error('An error occured', error);
	return Promise.reject(error.message || error);
 }
  constructor(private http: Http){}

  getShips(): Promise<Ship[]>  {
	const url = `${this.apiUrl}starships/`;
	return this.http.get(url)
		.toPromise()
		.then(response => {console.log(response.json()); return response.json().results as Ship[]})
		.catch(this.handleError);
  }
}

