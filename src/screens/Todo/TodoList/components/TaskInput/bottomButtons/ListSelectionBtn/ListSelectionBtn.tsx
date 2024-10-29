import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

import styles from '../style';

import { SvgXml } from 'react-native-svg';

function ListSelectionBtn({onPress, selector, list, listIdState}: any): React.JSX.Element {
    const updatedList = selector.todoLists.filter((list: any) => list.id == listIdState)[0];
    const inDarksList = ["My Day", "All"].includes(list?.name);
    
    return(
        <TouchableOpacity onPress={onPress}>
        {!updatedList.icon.includes("svg") ?
            <View style={styles.down_btn}>
                <Text style={styles.down_btn_text}>{updatedList.icon}</Text>
                <Text style={styles.down_btn_text}>{updatedList.name}</Text>
            </View>: inDarksList ? null:
            <View style={styles.down_btn}>
                <SvgXml xml={updatedList.icon}/>
                <Text style={styles.down_btn_text}>{updatedList.name}</Text>
            </View>}
        </TouchableOpacity>
    );
};

export default ListSelectionBtn;
