import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { ToDoData } from '../../../../../context/ToDo/models';

import styles from './TaskCard.style';

import CheckBox from '@react-native-community/checkbox';

interface TaskCardProps {
    TodoData: ToDoData;
}

function TaskCard({TodoData}: TaskCardProps): React.JSX.Element {
    return(
        <View>
            <CheckBox />
            <Text>TaskCard</Text>
        </View>
    );
};

export default TaskCard;
