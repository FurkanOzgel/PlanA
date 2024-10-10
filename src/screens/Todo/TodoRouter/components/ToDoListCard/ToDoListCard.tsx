import React from 'react';
import {
    View,
    Text,
  } from 'react-native';

import styles from './ToDoListCard.style';
import { TodoList } from '../../../../../context/ToDo/models';
import TextButton from '../../../../../components/TextButton';

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ToDoListCardProps {
    group: TodoList;
}

type RootStackParamList = {
    TodoList: { TodoListData: TodoList } | undefined;
};

function ToDoListCard({group}: ToDoListCardProps): React.JSX.Element {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const goList = () => {
        navigation.navigate('TodoList', {TodoListData: group});
    };

    return(
        <TouchableOpacity onPress={goList} style={styles.container}>
            <View style={{flexDirection:"row"}}>
                <Text style={{color:"white"}}>🔥</Text>
                <Text style={styles.label}>{group.name}</Text>
            </View>
            <Text style={styles.label}>{group.tasks.length !== 0 ? group.tasks.length : null}</Text>
        </TouchableOpacity>
        
    );
};

export default ToDoListCard;
