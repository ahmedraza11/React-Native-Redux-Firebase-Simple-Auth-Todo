import { COUNTER_ADD, COUNTER_MIN } from '../Actions/counter.Action';

const Initial_State = {
    counter: 12
}

export const CounterReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case COUNTER_ADD:
            return Object.assign({}, state, { counter: state.counter + 1 });
        case COUNTER_MIN:
            return Object.assign({}, state, { counter: state.counter - 1 });
        default:
            return state;
    }
}