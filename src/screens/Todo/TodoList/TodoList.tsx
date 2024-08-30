import React, {useState} from 'react';
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

import { useSelector } from 'react-redux';

function TodoList({navigation, route}: any): React.JSX.Element {
    const [taskInputVisible, setTaskInputVisible] = useState(false);

    const selector = useSelector((state: any) => state.ToDo);

    const listId = route.params.TodoListData.id;
    const TodoList = selector.todoLists.find((list: any) => list.id === listId);

    return(
        <View style={theme.background}>
            <HeaderBar onBackPress={navigation.goBack}/>
            <FlatList
                data={TodoList.tasks}
                renderItem={({item}) => <TaskCard TodoData={item}/>}/>
            <TaskInput visible={taskInputVisible} setVisible={setTaskInputVisible} listId={listId}/>
            <AddButton onPress={() => setTaskInputVisible(true)}/>
        </View>
    );
};

export default TodoList;
