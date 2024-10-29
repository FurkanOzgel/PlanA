import React, {useEffect, useState} from 'react';
import { View, FlatList} from 'react-native';

//Custom components
import HeaderBar from './components/HeaderBar';
import AddButton from '../../../components/AddButton';
import TaskInput from './components/TaskInput';
import TaskCard from './components/TaskCard';

//Functions
import { useSelector, useDispatch } from 'react-redux';
import { isToday } from '../../../utils/date';

//Styles
import { theme } from '../../../styles/theme.style';

function TodoList({navigation, route}: any): React.JSX.Element {
    //Props
    const listId = route.params.TodoListData.id;
    
    //States
    const [taskInputVisible, setTaskInputVisible] = useState(false);
    const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
    const [selectionMode, setSeletionMode] = useState(false);
    const selector = useSelector((state: any) => state.ToDo);
    
    let TodoList = {...selector.todoLists.find((list: any) => list.id === listId)}
    
    // If the list is 'My Day' then only show tasks that have makeToday set to the date of today
    if(TodoList.name === 'My Day') {
        TodoList.tasks = [];
        selector.todoLists.forEach((list: any) => {
            list.tasks.forEach((task: any) => {
                if(isToday(task.makeToday)) {
                    TodoList.tasks.push(task);
                }});
            });
        }
        
    //Hooks
    useEffect(() => {
        if(selectedTasks.length > 0){
            setSeletionMode(true);
        } else {
            setSeletionMode(false);
        }
    }, [selectedTasks]);
        
    //Functions
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
