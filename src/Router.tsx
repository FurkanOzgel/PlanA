import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { theme, colors } from './styles/theme.style';
import { store, persistor } from './context/store';
import AppTab from './navigation/AppTab';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor(colors.background, true);

const Router = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <AppTab/>
        </NavigationContainer>
    );
};


const App = (): React.JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router />
            </PersistGate>
        </Provider>
    );
};

export default App;