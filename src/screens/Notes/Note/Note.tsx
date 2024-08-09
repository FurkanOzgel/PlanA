import React from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity
  } from 'react-native';

import { theme, colors } from '../../../styles/theme.style';
import HeaderBar from './components/HeaderBar';

function Note({navigation}: any): React.JSX.Element {
    return(
        <SafeAreaView style={theme.background}>
            <HeaderBar navigation={navigation}/>
            <TextInput style={theme.text} placeholder="Title"/>
        </SafeAreaView>
    );
};

export default Note;