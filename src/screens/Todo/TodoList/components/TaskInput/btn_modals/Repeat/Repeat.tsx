import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './Repeat.style';

import PopupTemplate from '../PopupTemplate';

interface RepeatProps {
    visible: boolean;
    setVisible: (visible: string) => void;
}

function Repeat({visible, setVisible}: RepeatProps): React.JSX.Element {
    return(
        <PopupTemplate visible={visible} setVisible={setVisible}>
            <View style={{}}>
                <Text style={{}}>Repeat</Text>
            </View>
        </PopupTemplate>
    );
};

export default Repeat;
