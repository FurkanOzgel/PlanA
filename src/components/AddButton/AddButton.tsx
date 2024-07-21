import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity
  } from 'react-native';

import styles from './AddButton.style';
import { theme, colors } from '../../styles/theme.style';

type Props = {
    onPress(): void 
}

function AddButton(props: Props): React.JSX.Element {
    const {onPress} = props;
    return(
        <SafeAreaView style={styles.btn_container}>
            <TouchableOpacity onPress={onPress} style={styles.btn_touchable}>
                <Text style={styles.btn_icon}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default AddButton;