import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Keyboard
} from 'react-native';

import styles from './Habits.style';

import PopupTemplate from '../PopupTemplate';
import { TextInput } from 'react-native-gesture-handler';

function Habits({visible, setVisibleModalName, setHabitConfig}: any): React.JSX.Element {
    if(visible){
        Keyboard.removeAllListeners("keyboardDidHide");
    }
    const [habitType, setHabitType] = useState("");
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [habitTime, setHabitTime] = useState("x");

    useEffect(() => {
        setHabitConfig({habitType, selectedDays, habitTime});
    }, [habitType, selectedDays, habitTime]);

    const ChoiceContainer = ({children, style, onPress}: any): React.JSX.Element => {
        return (
            <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
                {children}
            </TouchableOpacity>
        );
    }

    const DaySelection = (): React.JSX.Element => {
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        function handleDaySelection(day: string): void {
            if(selectedDays.includes(day)){
                setSelectedDays(selectedDays.filter((selectedDay) => selectedDay != day));
            }
            else setSelectedDays([...selectedDays, day]);
        }
        return (
            <View style={styles.dayContainer}>
                {days.map((day, index) => (
                    <TouchableOpacity key={index} style={[{width: 50}, selectedDays.includes(day) ? {backgroundColor: "white"}: null]} onPress={() => handleDaySelection(day)}>
                        <Text>{day}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    function handleHabitTypeChange(type: string): void {
        if(habitType == type){
            setHabitType("");
        }
        else setHabitType(type);
    }

    return(
        <PopupTemplate visible={visible} containerHeight={250} setVisible={setVisibleModalName}>
            <View style={{alignSelf:"center",height: 250, width: 200, backgroundColor: "red" }}>
                <ChoiceContainer onPress={() => handleHabitTypeChange("24_day_loop")} style={habitType == "24_day_loop"? styles.selectedType: null}> 
                    <Text>24 Day Loop</Text>
                </ChoiceContainer>
                <ChoiceContainer onPress={() => handleHabitTypeChange("x_time_x_day")} style={habitType == "x_time_x_day"? styles.selectedType: null}>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <TextInput value={habitTime} placeholder="x" keyboardType='numeric' onChangeText={(text) => setHabitTime(text)}/>
                        <Text>Time</Text>
                    </View>
                    <DaySelection />
                </ChoiceContainer>
            </View>
        </PopupTemplate>
    );
};

export default Habits;
