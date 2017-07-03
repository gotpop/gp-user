// page.ts
import { ActionReducer, Action } from '@ngrx/store';

export const GETPAGE = 'GETPAGE';
export const SETPAGE = 'SETPAGE';

export function pageReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case GETPAGE:
			console.log('Get page innit')
			return state + 1;

		case SETPAGE:
		console.log('Set page innit')
			return state - 1;

		default:
			return state;
	}
}
