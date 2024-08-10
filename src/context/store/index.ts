import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { noteListReducer } from '../Note/reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const rootReducer = combineReducers({
    Note: noteListReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>