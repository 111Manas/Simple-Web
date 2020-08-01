import {createStore} from 'redux';

import allReducer from '../redux/root.reducer';
// import logger from 'redux-logger';

// const middlewares=[logger];

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;