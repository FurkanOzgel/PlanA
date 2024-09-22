import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import styles from './Targets.style';
import { theme } from '../../../styles/theme.style';
import { TextInput } from 'react-native-gesture-handler';

import TargetGroup from './components/TargetGroup';
import QuarterlyTargetGroup from './components/QuarterlyTargetGroup';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { generateRandomId } from '../../../utils/id';


function Target(): React.JSX.Element {
    const dispatch = useDispatch();
    const createGroup = () => {
        dispatch({type: 'ADD_GROUP', payload: {id: generateRandomId(), groupName: groupNames, targets: []}});
    };
    const createTarget = () => {
        dispatch({type: 'ADD_TARGET', payload: {id: generateRandomId(), targetName: targetNames, targetValue: 0, targetStatus: false, groupId: 1}});
    };

    const selector = useSelector((state: any) => state.Target);

    const [groupNames, setGroupName] = React.useState<string>('');
    const [targetNames, setTargetName] = React.useState<string>('');

    return(
        <View style={theme.background}>
            <Text style={theme.h2}>Target</Text>
            <TextInput style={{backgroundColor: "white", padding:10, margin:10}} placeholder="Enter Target" onChangeText={(text) => setTargetName(text)} />
            <TextInput style={{backgroundColor: "white", padding:10, margin:10}} placeholder="Enter Group" onChangeText={(text) => setGroupName(text)}/>
            <Button title="Add Group" onPress={() => createGroup()} />
            <Button title="Add Target" onPress={() => createTarget()}/>
            <Button title='Log' onPress={() => console.log(selector)} />
            <QuarterlyTargetGroup />
            <TargetGroup groupName={"Special"}/>
        </View>
    );
};

export default Target;
