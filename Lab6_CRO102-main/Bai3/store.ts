import { configureStore } from '@reduxjs/toolkit';
import { formApi } from './api'; // đúng đường dẫn file `api.ts` hoặc `api.js` nhé

const store = configureStore({
    reducer: {
        [formApi.reducerPath]: formApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(formApi.middleware),
});

export default store;
