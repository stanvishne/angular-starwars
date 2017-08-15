import Ship from './ship';

interface Selected {
	ships:	Ship[]
}

export interface AppState {	
	selected: Selected
}