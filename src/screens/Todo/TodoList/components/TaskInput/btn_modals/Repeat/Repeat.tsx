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
        <PopupTemplate visible={visible} setVisible={setVisible} containerHeight={100}>
            <View style={{backgroundColor:"blue", width: 40, height: 100}}>
                <Text style={{}}>1</Text>
                <Text style={{}}>2</Text>
                <Text style={{}}>3</Text>
                <Text style={{}}>4</Text>
                <Text style={{}}>5</Text>
                <Text style={{}}>6</Text>
                <Text style={{}}>7</Text>
                <Text style={{}}>8</Text>
            </View>
        </PopupTemplate>
    );
};

export default Repeat;
