import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {theme} from '../../../../../../../styles/theme.style';
import styles from '../style';

import { SvgXml } from 'react-native-svg';


function BottomBtn({ButtonSvg, Title, onPress}: {ButtonSvg: string, Title: string, onPress: () => void}): React.JSX.Element {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.down_btn}>
                <SvgXml xml={ButtonSvg} width="24" height="24" fill={theme.text.color} />
                <Text style={styles.down_btn_text}>{Title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default BottomBtn;
