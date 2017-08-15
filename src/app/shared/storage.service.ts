import { Injectable } from '@angular/core';
import  Ship from '../models/ship';
import { Store } from '@ngrx/store';
import actionTypes from './../selected/selected.consts';
import { AppState } from './../models/appState';



@Injectable()
export class StorageService {
	private storage: AppState;
	constructor(private store: Store<AppState>) {	
		const  saved = JSON.parse(localStorage.getItem('swItem'));
		this.store.dispatch({
			type: actionTypes.LOAD_SHIPS,
			payload: saved.selected.ships
		})
		console.log(saved);
		console.log('storage service constructor');	
	}

	getItems(){
		return this.storage;
	}
	getShips(): Ship[] {
		return [];
	}
	addShip(ship: Ship) {				
		this.store.dispatch({
			type: actionTypes.ADD_SHIP,
			payload: ship
		})				
	}

	deleteShip(ship: Ship) {		
		this.store.dispatch({
			type: actionTypes.DELETE_SHIP,
			payload: ship
		})
	}

	saveData() {
		this.store.take(1).subscribe( store => {
			localStorage.setItem('swItem', JSON.stringify(store));
		})
		
	}
}