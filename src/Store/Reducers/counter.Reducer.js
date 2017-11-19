import { COUNTER_ADD, COUNTER_MIN } from '../Actions/counter.Action';

const initialState = {
    counter: 12
}

export const CounterReducer = (state = 0, action) => {
    switch (action.type) {
        case COUNTER_ADD:
            return state + 1
        case COUNTER_MIN:
            return state - 1
        default:
            return state;
    }
}