import React, {useState} from 'react';
import {
    View,
    Modal,
    TextInput
  } from 'react-native';

import styles from './TaskInput.style';

import TextButton from '../../../../../components/TextButton';
import { theme } from '../../../../../styles/theme.style';

import { useDispatch, useSelector } from 'react-redux';
import { generateRandomId } from '../../../../../utils/id';
import { ToDoData } from '../../../../../context/ToDo/models';

interface TaskInputProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    listId: number;
}

function TaskInput({visible, setVisible, listId}: TaskInputProps ): React.JSX.Element {
    const [task, setTask] = useState('');
   
    const dispatch = useDispatch();
    const selector = useSelector((state: any) => state.ToDo);

    const createTask = () => {
        console.log('Create Task');
        const newTask: ToDoData = {
            isDone: false,
            title: task,
            time: new Date().toISOString(),
            id: generateRandomId(),
            isStarred: false,
            listId: listId
        };
        dispatch({ type: 'ADD_TODO', payload: newTask });
        setVisible(!visible);
        setTask('');
    }
    
    const cancelInput = () => {
        setVisible(!visible);
        setTask('');
    };

    return(
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(!visible);
                }}
        >
            <View style={styles.modalContainer}>
            <View style={styles.modalView}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={theme.text.color}
                    placeholder="Task"
                    value={task}
                    onChangeText={setTask}
                    spellCheck={false}
                    autoCorrect={false}
                />
                <View style={styles.buttons}>
                    <TextButton text="Cancel" textStyle={theme.text} onPress={cancelInput} />
                    <TextButton text="Create" textStyle={theme.text} onPress={createTask} />
                </View>
            </View>
            </View>
        </Modal>
    );
};

export default TaskInput;
