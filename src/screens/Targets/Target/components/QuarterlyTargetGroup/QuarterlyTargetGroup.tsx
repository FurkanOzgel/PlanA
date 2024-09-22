import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from './QuarterlyTargetGroup.style';
import DropDownPicker from '../../../../../components/DropDownPicker';
import { theme } from '../../../../../styles/theme.style';
import TargetGroup from '../TargetGroup';


function QuarterlyTargetGroup(): React.JSX.Element {

    const onValueChange = (value: string) => {
        console.log(value);
    }

    const currentYear = new Date().getFullYear();
    const years = [];

    for (let i = -2; i <= 2; i++) {
    years.push({
        label: `${currentYear + i}`,
        value: `${currentYear + i}`
    });
    }
    
    return(
        <View>
            <Text style={theme.h2}>QuarterlyTargetGroup</Text>
            <DropDownPicker items={years}  
                defaultValue={currentYear.toString()} 
                onChange={(value) => onValueChange(value)} 
                arrowColor='black'
                width={'20%'}
                />
            <View>
                <Text style={theme.h2}>Q1</Text>
                <TargetGroup groupName={currentYear+"/"+"Q1"}/>
                <Text style={theme.h2}>Q2</Text>
                <TargetGroup groupName={currentYear+"/"+"Q2"}/>
                <Text style={theme.h2}>Q3</Text>
                <TargetGroup groupName={currentYear+"/"+"Q3"}/>
                <Text style={theme.h2}>Q4</Text>
                <TargetGroup groupName={currentYear+"/"+"Q4"}/>
            </View>
        </View>
    );
};

export default QuarterlyTargetGroup;
