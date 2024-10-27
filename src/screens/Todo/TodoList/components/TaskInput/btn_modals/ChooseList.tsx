import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import ToDoListCard from "../../../../TodoRouter/components/ToDoListCard";

import { useSelector } from "react-redux";

function ChooseList({visible, setVisible, listId}: any): React.JSX.Element {
    const selector = useSelector((state: any) => state.ToDo);

    if (!visible) {
        return <></>;
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => setVisible('')}>
                <View style={{height: Dimensions.get("window").height, width:"100%", position: "absolute", top:-(Dimensions.get("window").height-200)}}/>
            </TouchableWithoutFeedback>
            {/* <View style={[styles.centeredView]}> */}
                {/* <View style={styles.modalView}> */}
                    {/* <Text style={styles.modalText}>Hello World!</Text> */}
                    <FlatList
                        style={{height: 200, width: 200, backgroundColor: 'gray'}}
                        data={selector.todoLists}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => console.log("pressed")}>
                                <ToDoListCard group={item} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                        keyboardShouldPersistTaps="always"/>
                {/* </View> */}
            {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        top: -200,
        zIndex: 1,
        flex: 1,
    },
    modalView: {
        height: 200,
        width: 200,
        flex: 1,
        backgroundColor: 'gray',
    }
});

export default ChooseList;