import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';

import { theme, colors } from './styles/theme.style';
import store from './context/store';
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
            <Router />
        </Provider>
    );
};

export default App;