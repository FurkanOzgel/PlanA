import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './PopupTemplate.style';

interface PopupTemplateProps {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (visible: string) => void;
}

function PopupTemplate({children ,visible, setVisible}: PopupTemplateProps): React.JSX.Element {
    return(
        <View>
            <Text>PopupTemplate</Text>
            {visible && children}
        </View>
    );
};

export default PopupTemplate;
