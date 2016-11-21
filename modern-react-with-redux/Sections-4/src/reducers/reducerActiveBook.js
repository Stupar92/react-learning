
// state is not application state, only the state this reduces is responsible for
// we add default state to null to handle the case when we are booting the app
export default function(state = null, action) {
    
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state;
}