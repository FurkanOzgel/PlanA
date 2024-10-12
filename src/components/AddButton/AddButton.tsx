import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './AddButton.style';

import { SvgXml } from 'react-native-svg';
import { addIcon } from '../../assets/svg';

type Props = {
    onPress(): void 
}

function AddButton(props: Props): React.JSX.Element {
    const {onPress} = props;
    return(
        <SafeAreaView style={styles.btn_container}>
            <TouchableOpacity onPress={onPress} style={styles.btn_touchable}>
                <SvgXml xml={addIcon} height={40} width={40}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default AddButton;