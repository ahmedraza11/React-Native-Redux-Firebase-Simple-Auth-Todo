import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { CounterReducer } from './Reducers/counter.Reducer';

export const rootReducers = combineReducers({
    CounterReducer,
   
});

export let Store = createStore(rootReducers,applyMiddleware(logger));

