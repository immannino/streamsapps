import { Action } from '@ngrx/store';
import { Laundry } from '@app/core/models/laundry.model';
import * as LaundryActions from './../actions/laundry.actions';

export function reducer(state: Laundry[] = [], action: LaundryActions.Actions) {

    switch (action.type) {
        case LaundryActions.ADD_LAUNDRY:
            return [...state, action.payload];

            case LaundryActions.REMOVE_LAUNDRY:
                state.splice(action.payload, 1);
                return state;
        default:
            return state;
    }
}
