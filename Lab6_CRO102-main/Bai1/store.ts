import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Bai1/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
