import React, {useState} from 'react';
import { View, Text, useWindowDimensions, Button } from 'react-native';

//Styles
import styles from './SetReminder.style';

//Custom Components
import PopupTemplate from '../PopupTemplate';

//Third Party Libraries
import DatePicker from 'react-native-date-picker';

// Utils
import { checkNotificationPermission } from '../../../../../../../utils/Android';

interface SetReminderProps {
    setReminderDate: (date: Date) => void;
    visible: boolean;
    setVisibleModalName: (visible: string) => void;
}

function Reminder({ setReminderDate, visible, setVisibleModalName}: SetReminderProps): React.JSX.Element {
    const [date, setDate] = useState(new Date());

    function createReminder() {
        checkNotificationPermission();
        setReminderDate(date);
        setVisibleModalName('');
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
            <Button title="Set Reminder" onPress={createReminder}/>
            <Button title="Cancel" onPress={cancel}/>
            </View>
        </PopupTemplate>
    );
};

export default Reminder;
export {}
