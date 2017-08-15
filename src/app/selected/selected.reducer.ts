import { combineReducers } from '@ngrx/store';
import actionTypes from './selected.consts';
import Ship from './../models/ship';


function shipsReducer(state: Ship[] = [], {type, payload}) {
	switch (type) {
		case actionTypes.ADD_SHIP:		 	
			return state.find(item => item.url === payload.url) ? state : [...state, payload];					
		case actionTypes.DELETE_SHIP:
			return state.filter(item => item.url!==payload.url)
		case actionTypes.LOAD_SHIPS:
			return [...payload];			
		default:
			return state;
	}

}

const reducers = {
	ships: shipsReducer
}

const reducer = combineReducers(reducers);

export function selectedReducer(state: any, action: any) {
	return reducer(state, action);

}