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


    const handleAddList = () => {
        setPopUpVisible(true);
    }

    const ToDoLists = useSelector((state: any) => state.ToDo.todoLists);
    return ( // TODO: Add non deleteable three list
        <View style={theme.background}>
            <PopUpInput visible={popUpVisible} setVisible={setPopUpVisible}/>
            <SearchBar onValueChange={() => {}}/>
            {/* <View style={styles.container}> 
                <TodoListCard/>
                <TodoListCard/>
                <TodoListCard/>
            </View> */}
            <FlatList //TODO: The user can change the order of the lists
                data={ToDoLists}
                renderItem={({item}) => <TodoListCard group={item}/> }/>
            <AddButton onPress={handleAddList}/>
        </View>
    );
};

export default TodoRouter;