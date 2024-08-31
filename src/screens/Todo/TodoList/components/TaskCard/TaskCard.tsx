import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { ToDoData } from '../../../../../context/ToDo/models';

import styles from './TaskCard.style';
import { theme } from '../../../../../styles/theme.style';

import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';

interface TaskCardProps {
    TodoData: ToDoData;
    selectedTasks: number[];
    setSelectedTasks: (value: number[]) => void;
}

function TaskCard({TodoData, selectedTasks, setSelectedTasks}: TaskCardProps): React.JSX.Element {
    const dispatch = useDispatch();
    const [toggleCheckBox, setToggleCheckBox] = React.useState(TodoData.isDone);

    function toggleTask() {
        setToggleCheckBox(!toggleCheckBox);
        dispatch({"type": "CHANGE_STATUS_TODO", "payload": {"listId": TodoData.listId, "taskId": TodoData.id}});
    }

    function handleLongPress() {
        if (!selectedTasks.includes(TodoData.id)) {
            setSelectedTasks([...selectedTasks, TodoData.id]);
        } else {
            setSelectedTasks(selectedTasks.filter((id) => id != TodoData.id));
        }
    }

    function handlePress() {
        if(selectedTasks.length == 0){
            toggleTask();
        } else if(selectedTasks.includes(TodoData.id)){
            setSelectedTasks(selectedTasks.filter((id) => id != TodoData.id));
        } else {
            setSelectedTasks([...selectedTasks, TodoData.id]);
        }
    }

    const isSelected = selectedTasks.includes(TodoData.id);

    return(
        <TouchableOpacity style={[styles.cardContainer, isSelected ? styles.selected: null]} onPress={handlePress} onLongPress={handleLongPress}>
            <CheckBox 
                value={toggleCheckBox}
                onValueChange={() => toggleTask()}
                />
            <Text style={theme.text}>{TodoData.title}</Text>
        </TouchableOpacity>
    );
};

export default TaskCard;
