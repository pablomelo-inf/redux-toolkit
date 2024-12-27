import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counter-slice';

/*export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
*/

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
