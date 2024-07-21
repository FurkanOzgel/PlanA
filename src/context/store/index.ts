import {combineReducers, createStore, applyMiddleware} from 'redux';
import { noteListReducer } from '../Note/reducers';
// import {createLogger} from 'redux-logger';

const rootReducer = combineReducers({
    noteList: noteListReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>