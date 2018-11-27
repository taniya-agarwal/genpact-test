

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension'


let middleware = [thunk];
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const initialState = {
    data: [{ department: 'HR', id: [1, 2, 3, 4, 5] },
    { department: 'Engineering', id: [6, 7, 8, 9, 10] }
    ],
};

// store
export default createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
));
