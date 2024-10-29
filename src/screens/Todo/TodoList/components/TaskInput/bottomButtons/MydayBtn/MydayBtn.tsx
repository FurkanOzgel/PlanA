import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../style';
import { theme } from '../../../../../../../styles/theme.style';

import { SvgXml } from 'react-native-svg';

function MydayBtn({ButtonSvg, Title, onPress, makeToday}: {ButtonSvg: string, Title: string, onPress: () => void, makeToday: any}): React.JSX.Element {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.down_btn, {backgroundColor: makeToday ? "blue": "rgba(0,0,0,0)"}]}>
                <SvgXml xml={ButtonSvg} width="24" height="24" fill={theme.text.color} />
                <Text style={styles.down_btn_text}>{Title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MydayBtn;
