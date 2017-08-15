import { combineReducers } from '@ngrx/store';
import { selectedReducer } from './selected/selected.reducer';


// export function AppReducer(state: AppState , action: Action) {
// 	return {
// 		selected: selectedReducer(state, {type: action.type, payload: action.payload})
// 	};
// }

const reducers = {
	selected: selectedReducer
}

const rootReducer = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
	return rootReducer(state, action);
}