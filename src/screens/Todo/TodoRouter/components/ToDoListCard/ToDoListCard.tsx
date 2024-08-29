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
        <TextButton onPress={goList} text={group.name} style={styles.listCard}
            textStyle={styles.listText}/>
    );
};

export default ToDoListCard;
