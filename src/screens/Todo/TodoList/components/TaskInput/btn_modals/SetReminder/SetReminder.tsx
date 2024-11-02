import React, {useState} from 'react';
import { View, Text, useWindowDimensions, Button } from 'react-native';
import { checkNotificationPermission } from '../../../../../../../utils/Android';

//Styles
import styles from './SetReminder.style';

//Utils
import Notifications from '../../../../../../../utils/Notifications';

//Custom Components
import PopupTemplate from '../PopupTemplate';

//Third Party Libraries
import DatePicker from 'react-native-date-picker';

interface SetReminderProps {
    visible: boolean;
    setVisibleModalName: (visible: string) => void;
}

function Reminder({visible, setVisibleModalName}: SetReminderProps): React.JSX.Element {
    const [date, setDate] = useState(new Date())

    function setReminder() {
        checkNotificationPermission(); //Check if the app has permission to send notifications for Android
        Notifications.scheduleNotification("Task Reminder", "Task Reminder", date);
    }

    function cancel() {
        setVisibleModalName('');
    }

    if(!visible){
        return <></>;
    }

    return(
        <PopupTemplate visible={visible} setVisible={setVisibleModalName} containerHeight={250}>
            <View style={{alignSelf:"center",height: 300, width: 300, backgroundColor: "red" }}>  
            <DatePicker
                date={date}
                modal={false}
                style={{ height: 200}}
                mode={"datetime"}
                theme='dark'
                minimumDate={new Date()}
                onDateChange={setDate}
            /> 
            <Button title="Set Reminder" onPress={setReminder}/>
            <Button title="Cancel" onPress={cancel}/>
            </View>
        </PopupTemplate>
    );
};

export default Reminder;
