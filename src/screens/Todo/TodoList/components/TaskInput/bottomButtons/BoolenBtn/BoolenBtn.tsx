import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../style';
import { theme } from '../../../../../../../styles/theme.style';

import { SvgXml } from 'react-native-svg';

interface BoolenBtnProps {
    ButtonSvg: string;
    Title: string;
    onPress: () => void;
    state: any;
}

function BoolenBtn({ButtonSvg, Title, onPress, state}: BoolenBtnProps): React.JSX.Element {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.down_btn, {backgroundColor: state ? "blue": "rgba(0,0,0,0)"}]}>
                <SvgXml xml={ButtonSvg} width="24" height="24" fill={theme.text.color} />
                <Text style={styles.down_btn_text}>{Title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default BoolenBtn;
