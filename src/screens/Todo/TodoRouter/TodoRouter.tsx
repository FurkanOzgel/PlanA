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
                <View>
                    <TodoListCard group={TodoLists[1]} color="white" size={20}/>
                    <TodoListCard group={TodoLists[0]} color="rgb(170,187,248)" size={20}/>
                    <TodoListCard group={TodoLists[2]} color="rgb(255,132,48)" size={20}/>
                </View>
                <View style={styles.hr}/>
                <FlatList
                    data={TodoLists.slice(3)}
                    renderItem={({item}) => <TodoListCard group={item}/> }/>
                <AddButton onPress={handleAddList}/>
            </View>
        </View>
    );
};

export default TodoRouter;