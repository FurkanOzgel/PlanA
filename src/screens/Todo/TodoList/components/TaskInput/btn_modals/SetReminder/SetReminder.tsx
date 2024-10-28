import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';

import styles from './SetReminder.style';

interface SetReminderProps {
    visible: boolean;
    setVisible: (visible: string) => void;
}


function Reminder({visible, setVisible}: SetReminderProps): React.JSX.Element {
    if(!visible){
        return <></>;
    }

    return(
        <View>
        <TouchableWithoutFeedback onPress={() => setVisible('')}>
            <View style={{height: Dimensions.get("window").height, width:"100%", position: "absolute", top:-(Dimensions.get("window").height-200)}}/>
        </TouchableWithoutFeedback>
        <View style={{alignSelf:"flex-end",height: 200, width: 200, backgroundColor: "red"}}>

        </View>
        </View>
    );
};

export default Reminder;
