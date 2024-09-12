import { configureStore, combineReducers, createStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { noteListReducer } from '../Note/reducers';
import { todoListReducer } from '../ToDo/reducers';
import { timerReducer } from '../Timer/reducers';
import { targetStateReducer } from '../Target/reducers';

const rootReducer = combineReducers({
    Note: noteListReducer,
    ToDo: todoListReducer,
    Timer: timerReducer,
    Target: targetStateReducer
});


const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
   
const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export let persistor = persistStore(store as any);

// persistor.purge();