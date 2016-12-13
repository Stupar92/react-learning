import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
    
    if (!action) {
        return state;
    }
    
    switch(action.type) {
        case SAVE_COMMENT:
            return [ ...state, action.payload];
    }

    return state;
}