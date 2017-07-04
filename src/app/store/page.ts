// page.ts
import { ActionReducer, Action } from '@ngrx/store';
import { Status } from '../shared/status.model';

export const GETPAGE = 'GETPAGE';
export const SETPAGE = 'SETPAGE';

export function pageReducer(state = {}, action: Action) {

  switch (action.type) {

    case GETPAGE: {
      return state = {
        home: true,
        step1: false,
        step2: false,
        step3: false,
        summary: false
      }
    }
    case SETPAGE: {
      return state = action.payload
    }
    default: {
      return state;
    }

  }
}
