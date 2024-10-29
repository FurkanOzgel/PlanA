import React from 'react';
import { View, TouchableWithoutFeedback, Dimensions } from 'react-native';

import styles from './SetReminder.style';
import PopupTemplate from '../PopupTemplate';

interface SetReminderProps {
    visible: boolean;
    setVisible: (visible: string) => void;
}

function Reminder({visible, setVisible}: SetReminderProps): React.JSX.Element {
    if(!visible){
        return <></>;
    }

    return(
        <PopupTemplate visible={visible} setVisible={setVisible} containerHeight={200}>
            <View style={{alignSelf:"center",height: 200, width: 200, backgroundColor: "red"}}>
            </View>
        </PopupTemplate>
    );
};

export default Reminder;
