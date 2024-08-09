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
            <TextInput style={theme.h1} placeholder="Title" placeholderTextColor={colors.placeholder}/>
            <TextInput style={theme.text} placeholder="Note" placeholderTextColor={colors.placeholder}/>
        </SafeAreaView>
    );
};

export default Note;