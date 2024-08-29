import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './TodoList.style';
import HeaderBar from './../../Notes/Note/components/HeaderBar'; //TODO: This component belongs to the note stack


function TodoList({navigation, route}: any): React.JSX.Element {
    return(
        <View>
            <HeaderBar onBackPress={navigation.goBack}/>
            <Text>TodoList</Text>
        </View>
    );
};

export default TodoList;
