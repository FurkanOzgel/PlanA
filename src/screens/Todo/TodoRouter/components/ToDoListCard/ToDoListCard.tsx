import React from 'react';
import { View, Text } from 'react-native';

import styles from './ToDoListCard.style';
import { TodoList } from '../../../../../context/ToDo/models';

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import { SvgXml } from 'react-native-svg';

interface ToDoListCardProps {
    group: TodoList;
    color?: string;
    size?: number;
}

type RootStackParamList = {
    TodoList: { TodoListData: TodoList } | undefined;
};

function ToDoListCard({group, color, size}: ToDoListCardProps): React.JSX.Element {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const goList = () => {
        navigation.navigate('TodoList', {TodoListData: group});
    };

    const isSvg = group.icon.includes('svg');

    return(
        <TouchableNativeFeedback onPress={goList} style={styles.container}>
            <View style={styles.left_side_container}>
                {isSvg ? 
                    <SvgXml style={styles.list_emoji} xml={group.icon} fill={color} width={size} height={size}/>:
                    <Text style={styles.list_emoji}>{group.icon}</Text>
                    }
                <Text style={styles.label}>{group.name}</Text>
            </View>
            <Text style={styles.label}>{group.tasks.length !== 0 ? group.tasks.length : null}</Text>
        </TouchableNativeFeedback>
        
    );
};

export default ToDoListCard;
