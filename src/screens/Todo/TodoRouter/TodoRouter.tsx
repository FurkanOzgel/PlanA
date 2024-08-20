import React from "react";
import { View, Text } from "react-native";
import { styles } from "./TodoRouter.style";

import { theme, colors } from "../../../styles/theme.style";
import SearchBar from "../../../components/SearchBar";
import { FlatList } from "react-native-gesture-handler";

function TodoListCard() {
    return (
        <View style={styles.todoListCard}>
            <Text>TodoListCard</Text>
        </View>
    );
};

function TodoRouter() {
    return (
        <View style={theme.background}>
            <SearchBar onValueChange={() => {}}/>

            <View style={styles.container}>
                <TodoListCard/>
                <TodoListCard/>
                <TodoListCard/>
            </View>

            <FlatList
                data={[]}
                renderItem={TodoListCard}/>
        </View>
    );
};

export default TodoRouter;