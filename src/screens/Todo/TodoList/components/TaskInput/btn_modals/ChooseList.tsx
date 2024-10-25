import React from "react";
import { View, Text, StyleSheet} from 'react-native';

function ChooseList({visible, listId}: any): React.JSX.Element {
    return (
        <View style={[styles.centeredView, {display: visible ? "flex" : "none"}]}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        top: -210,
        zIndex: 1
        
    },
    modalView: {
        height: 200,
        width: 300,
        backgroundColor: 'white',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ChooseList;