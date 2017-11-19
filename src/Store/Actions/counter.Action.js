
export const COUNTER_ADD = "COUNTER_ADD";
export const COUNTER_MIN = "COUNTER_MIN";

export const addCounter = (value) => ({
    type: COUNTER_ADD,
    payload: value
});

export const minCounter = (value) => ({
    type: COUNTER_MIN,
    payload: value
});
