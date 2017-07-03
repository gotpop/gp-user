// page.ts
import { ActionReducer, Action } from '@ngrx/store';

export const GETPAGE = 'GETPAGE';
export const SETPAGE = 'SETPAGE';

export function pageReducer(state = {}, action: Action) {

  switch (action.type) {

    case GETPAGE: {
			console.log('Get page fired');
      return state = {
        greet: "10"
      }
    }
    case SETPAGE: {
      console.log('Set page state: ', state);
			console.log('Set page payload: ', action.payload);
      return state = action.payload
			// return state = true
    }
    default: {
      return state;
    }


  }
}
