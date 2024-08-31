import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./TodoRouter.style";

import { theme, colors } from "../../../styles/theme.style";
import SearchBar from "../../../components/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import TodoListCard from "./components/ToDoListCard";
import { useSelector } from "react-redux";
import AddButton from "../../../components/AddButton";
import PopUpInput from "./components/PopUpInput";

function TodoRouter() {
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [searchMode, setSearchMode] = useState(false);
    const [searchResults, setSearchResults] = useState('');

    const ToDoLists = useSelector((state: any) => state.ToDo.todoLists);

    const handleAddList = () => {
        setPopUpVisible(true);
    }

    const search = (text: string) => {
        if(text.length > 0){
            setSearchMode(true);
            const filteredTasks = ToDoLists.map((element: any) => { //TODO: Render comp for filtered tasks
                return {
                    ...element,
                    tasks: element.tasks.filter((task: any) => {return task.title.toLowerCase().includes(text.toLowerCase())})
                }
                });
        }else{
            setSearchMode(false);
        }
    };

    return ( // TODO: Add non deleteable three list
        <View style={theme.background}>
            <PopUpInput visible={popUpVisible} setVisible={setPopUpVisible}/>
            <SearchBar onValueChange={search}/>
            {/* <View style={styles.container}> 
                <TodoListCard/>
                <TodoListCard/>
                <TodoListCard/>
            </View> */}
            {searchMode ? <Text>{}</Text> : 
            <View style={{flex:1}}>
                <FlatList //TODO: The user can change the order of the lists
                    data={ToDoLists}
                    renderItem={({item}) => <TodoListCard group={item}/> }/>
                <AddButton onPress={handleAddList}/>
            </View>
            }
        </View>
    );
};

export default TodoRouter;