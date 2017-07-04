// page.ts
import { ActionReducer, Action } from '@ngrx/store';
import { Status } from '../shared/status.model';

export const GETPAGE = 'GETPAGE';
export const SETPAGE = 'SETPAGE';

const INITVAR = new Status(true, false, false, false, false)

export function pageReducer(state = INITVAR, action: Action) {

  switch (action.type) {

    case GETPAGE: {
      return state
    }
    case SETPAGE: {
      return state = action.payload
    }
    default: {
      return state;
    }

  }
}
