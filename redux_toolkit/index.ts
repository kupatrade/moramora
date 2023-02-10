import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './slices/global';
import { moraApi } from './api/api';

export const store = configureStore({
    reducer: {
        [moraApi.reducerPath]: moraApi.reducer,
        global: globalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moraApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch