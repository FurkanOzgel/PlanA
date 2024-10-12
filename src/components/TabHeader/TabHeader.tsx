import React from 'react';
import { View, Text } from 'react-native';

import styles from './TabHeader.style';
import {theme} from '../../styles/theme.style';

interface TabHeaderProps {
    text: string;
};

function TabHeader({text}: TabHeaderProps): React.JSX.Element {
    return(
        <View style={styles.container}>
            <Text style={[styles.text, theme.h2]}>{text}</Text>
        </View>
    );
};

export default TabHeader;
