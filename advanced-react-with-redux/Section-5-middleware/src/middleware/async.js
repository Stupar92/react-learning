
// argument to this function is an object with multuple properties, but we only care about 'dispatch' property
export default function({dispatch}) {
    return next => action => {

        // I dont care if this is not an async
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        action.payload.then(response => {
            const newAction = {...action, payload: response};
            
            // take this action and send it through all reducers again
            dispatch(newAction);
        });

        //we won't return next here??
    }
}