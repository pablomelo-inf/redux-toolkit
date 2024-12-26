import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
    counter: {
        value: number;
    }
}

const initialState = {
  
        value: 0,
    
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    }
})

export const {increment,incrementByAmount,decrement} = counterSlice.actions;
export const counterReducer =  counterSlice.reducer;