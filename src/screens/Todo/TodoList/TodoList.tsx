import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';

import styles from './TodoList.style';
import HeaderBar from './components/HeaderBar';
import { theme } from '../../../styles/theme.style';
import AddButton from '../../../components/AddButton';
import TaskInput from './components/TaskInput';
import TaskCard from './components/TaskCard';

import { useSelector, useDispatch } from 'react-redux';

function TodoList({navigation, route}: any): React.JSX.Element {
    const [taskInputVisible, setTaskInputVisible] = useState(false);
    const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
    const [selectionMode, setSeletionMode] = useState(false);

    useEffect(() => {
        if(selectedTasks.length > 0){
            setSeletionMode(true);
        } else {
            setSeletionMode(false);
        }
    }, [selectedTasks]);

    const selector = useSelector((state: any) => state.ToDo);

    const listId = route.params.TodoListData.id;
    const TodoList = selector.todoLists.find((list: any) => list.id === listId);

    const dispatch = useDispatch();

    const handleDelete = () => {
        selectedTasks.forEach((taskId) => {
            dispatch({type: 'DELETE_TODO', payload: {id: taskId, listId: listId}});
        });
        setSelectedTasks([]);
    }

    return(
        <View style={theme.background}>
            <HeaderBar onBackPress={navigation.goBack} selectionMode={selectionMode} handleDelete={handleDelete}/>
            <FlatList
                data={TodoList.tasks}
                renderItem={({item}) => <TaskCard TodoData={item} selectedTasks={selectedTasks} setSelectedTasks={setSelectedTasks}/>}/>
            <TaskInput visible={taskInputVisible} setVisible={setTaskInputVisible} listId={listId}/>
            <AddButton onPress={() => setTaskInputVisible(true)}/>
        </View>
    );
};

export default TodoList;
