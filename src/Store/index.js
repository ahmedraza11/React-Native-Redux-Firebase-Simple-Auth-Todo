import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import { CounterReducer } from './Reducers/counter.Reducer';
import { SignupReducer } from './Reducers/signup.Reducer';
import { LoginReducer } from './Reducers/login.Reducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, logger);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducers = combineReducers({
    CounterReducer,
    SignupReducer,
    LoginReducer
});

export let Store = createStore(rootReducers, composeEnhancers(middleware));

