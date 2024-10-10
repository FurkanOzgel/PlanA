import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./TodoRouter.style";

import { theme } from "../../../styles/theme.style";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import TodoListCard from "./components/ToDoListCard";
import AddButton from "../../../components/AddButton";
import PopUpInput from "./components/PopUpInput";
import TabHeader from "../../../components/TabHeader";

function TodoRouter() {
    const [popUpVisible, setPopUpVisible] = useState(false);
    const TodoLists = useSelector((state: any) => state.ToDo.todoLists);

    const handleAddList = () => {
        setPopUpVisible(true);
    }

    return (
        <View style={theme.background}>
            <TabHeader text={"ToDo"}/>
            <PopUpInput visible={popUpVisible} setVisible={setPopUpVisible}/>
            <View style={{flex:1}}>
                <View style={styles.defaultContainer}>
                    <TodoListCard group={TodoLists[0]}/>
                    <TodoListCard group={TodoLists[1]}/>
                    <TodoListCard group={TodoLists[2]}/>
                </View>
                <FlatList
                    data={TodoLists.slice(3)}
                    renderItem={({item}) => <TodoListCard group={item}/> }/>
                <AddButton onPress={handleAddList}/>
            </View>
        </View>
    );
};

export default TodoRouter;