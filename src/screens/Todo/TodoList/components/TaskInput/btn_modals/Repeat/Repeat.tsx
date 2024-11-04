import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from './Repeat.style';

import PopupTemplate from '../PopupTemplate';
import { TextInput } from 'react-native-gesture-handler';
import { theme } from '../../../../../../../styles/theme.style';
import DropdownPicker from '../../../../../../../components/DropDownPicker';

interface RepeatProps {
    visible: boolean;
    setVisible: (visible: string) => void;
}

interface RepeatModeProps {
    mode: string;
    selected: string;
    setSelected: any;
}

const days = [
    {label: "Mon", value: "Mon"}, 
    {label: "Tue", value: "Tue"}, 
    {label: "Wed", value: "Wed"}, 
    {label: "Thu", value: "Thu"}, 
    {label: "Fri", value: "Fri"}, 
    {label: "Sat", value: "Sat"}, 
    {label: "Sun", value: "Sun"}
];

function RepeatMode({mode, selected, setSelected}: RepeatModeProps): React.JSX.Element {
    
    function getRepeatMode() {
        switch(mode){
            case "every-day":
                return(
                    <View style={styles.modeView}>
                        <TextInput placeholder="1" placeholderTextColor={"white"} style={{borderBottomWidth: 1, borderBottomColor: "lightgrey", color:"white"}}/> 
                        <Text style={theme.text}>Time Every Day</Text>
                    </View>
                )
            case "x-week-x-days":
                return (
                <View style={styles.modeView}>
                    <TextInput placeholder="..." enabled={false} style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}/>
                    <Text>Week</Text>
                    <View style={{flexDirection: 'row', flexWrap: "wrap"}}>
                        <DropdownPicker items={days} defaultValue="Mon" />
                    </View>
                </View>
                );
            case "x-month-x-th-day":
                return (
                <View style={styles.modeView}>
                    <TextInput placeholder="1" style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}/>
                    <Text>Month</Text>
                    <TextInput placeholder="1" style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}/>
                    <Text>'th Day</Text>
                </View>
                );
            case "x-day-of-year":
                return (
                <View style={styles.modeView}>
                    <Text>Day</Text>
                    <TextInput placeholder="1" style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}/>
                    <Text>Month</Text>
                    <TextInput placeholder="1" style={{borderBottomWidth: 1, borderBottomColor: "lightgrey"}}/>
                    <Text>Day of Year</Text>
                </View>
                );
        }
    }

    function handlePress() {
        (selected == mode) ? setSelected("") : setSelected(mode);
    }

    return (
        <TouchableOpacity style={[styles.repeatMode, selected == mode? styles.selectedMode: null]} onPress={handlePress}>
            {getRepeatMode()}
        </TouchableOpacity>
        );
}

function Repeat({visible, setVisible}: RepeatProps): React.JSX.Element {
    const [selected, setSelected] = React.useState("");

    return(
        <PopupTemplate visible={visible} setVisible={setVisible} containerHeight={190}>
            <View style={styles.container}>
                <RepeatMode mode="every-day" selected={selected} setSelected={setSelected}/>
                <RepeatMode mode="x-week-x-days"  selected={selected} setSelected={setSelected}/>
                <RepeatMode mode="x-month-x-th-day"  selected={selected} setSelected={setSelected}/>
                <RepeatMode mode="x-day-of-year"  selected={selected} setSelected={setSelected}/>
            </View>
        </PopupTemplate>
    );
};

export default Repeat;
