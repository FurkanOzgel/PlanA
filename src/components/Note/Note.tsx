import React from 'react';
import {
    SafeAreaView,
    Text
  } from 'react-native';

import styles from './Note.style';
import { theme, colors } from '../../styles/theme.style';

function Note(): React.JSX.Element {
    return(
        <SafeAreaView>
            <Text style={theme.text}>Note</Text>
        </SafeAreaView>
    );
};

export default Note;