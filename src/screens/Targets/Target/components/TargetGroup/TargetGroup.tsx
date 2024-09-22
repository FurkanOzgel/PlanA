import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './TargetGroup.style';
import { theme } from '../../../../../styles/theme.style';

interface TargetGroupProps {
    groupName: string;
}


function TargetGroup({groupName}: TargetGroupProps): React.JSX.Element {
    return(
        <View>
            <Text style={theme.text}>{groupName}</Text>
        </View>
    );
};

export default TargetGroup;
