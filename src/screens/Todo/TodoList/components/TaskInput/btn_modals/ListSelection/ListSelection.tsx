import React from "react";
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import { SvgXml } from "react-native-svg";
import { useSelector } from "react-redux";

import styles from "./ListSelection.style";
import PopupTemplate from "../PopupTemplate";

function ListSelection({visible, setVisible, listId, setListId}: any): React.JSX.Element {
    const selector = useSelector((state: any) => state.ToDo);

    const renderListCart = ({item}: any) => {
        return(
            <TouchableOpacity style={styles.container} onPress={() => {setListId(item.id); setVisible('')}}>
                <View style={styles.left_side_container}>
                    {item.icon.includes('svg') ? 
                        <SvgXml style={styles.list_emoji} xml={item.icon}/>:
                        <Text style={styles.list_emoji}>{item.icon}</Text>
                        }
                    <Text style={styles.label}>{item.name}</Text>
                </View>
                <Text style={styles.label}>{item.tasks.length !== 0 ? item.tasks.length : null}</Text>
            </TouchableOpacity>
        )
    };

    if (!visible) {
        return <></>;
    }

    return (
        <PopupTemplate visible={visible} setVisible={setVisible} containerHeight={200}>
            <FlatList
                style={{height: 200, width: 200, backgroundColor: 'gray', alignSelf: 'center'}}
                data={selector.todoLists}
                renderItem={renderListCart}
                keyExtractor={item => item.id.toString()}
                keyboardShouldPersistTaps="always"/>
        </PopupTemplate>
    );
}

export default ListSelection;