import React from "react";
import { SafeAreaView, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { SvgXml } from "react-native-svg";

import { theme, colors } from "../../styles/theme.style";
import { timerIcon, targetIcon, todoIcon, notesIcon, dashboardIcon } from "../../assets/svg";

import { Note, NoteList } from "../../screens/Notes";
import { TodoRouter, TodoList } from "../../screens/Todo";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppTab = (): React.JSX.Element => {
    return (
    <Tab.Navigator initialRouteName="Notes"
        screenOptions={({ route }) => {
            return{
            tabBarShowLabel: false,
            tabBarHideOnKeyboard:true,
            headerShown: false,
            tabBarActiveTintColor: colors.active_tab_icon_tint,
            tabBarInactiveTintColor: colors.inactive_tab_icon_tint,
            tabBarStyle: {
                backgroundColor: colors.background,
                borderTopWidth: 1,
                borderTopColor: colors.border
            },
            tabBarIcon:(props) => {
                if(route.name === 'Timer'){
                    return <SvgXml xml={timerIcon} width={24} height={24} fill={props.color}/>
                }
                else if(route.name ==='Target'){
                    return <SvgXml xml={targetIcon} width={24} height={24} fill={props.color}/>
                }
                else if(route.name ==='Notes'){
                    return <SvgXml xml={notesIcon} width={24} height={24} fill={props.color}/>
                }
                else if(route.name === 'ToDo'){
                    return <SvgXml xml={todoIcon} width={24} height={24} fill={props.color}/>
                }
                else if(route.name === 'Dashboard'){
                    return <SvgXml xml={dashboardIcon} width={24} height={24} fill={props.color}/>
                }
        }}}}>
        <Tab.Screen name="Timer" component={TimerStack} />
        <Tab.Screen name="Target" component={TargetStack} />
        <Tab.Screen name="Dashboard" component={DashboardStack} />
        <Tab.Screen name="Notes" component={NotesStack} />
        <Tab.Screen name="ToDo" component={ToDoStack} />
    </Tab.Navigator>
    );
};


const TimerStack = (): React.JSX.Element  => {
    return (
        <SafeAreaView style={theme.background}>
            <Text>TimerStack</Text>
        </SafeAreaView>
    );
};  

const TargetStack = (): React.JSX.Element  => {          
    return (
        <SafeAreaView style={theme.background}>
            <Text>TargetStack</Text>
        </SafeAreaView>
    );
};  

const NotesStack = (): React.JSX.Element  => {      
    return (
        <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forNoAnimation}}>
            <Stack.Screen name="NoteList" component={NoteList} />
            <Stack.Screen name="Note" component={Note} />
        </Stack.Navigator>
    );
};

const ToDoStack = (): React.JSX.Element  => {   
    return (
        <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forNoAnimation}}>
            <Stack.Screen name="TodoRouter" component={TodoRouter} />
            <Stack.Screen name="TodoList" component={TodoList} />
        </Stack.Navigator>
    );
};

const DashboardStack = (): React.JSX.Element  => {   
    return (
        <SafeAreaView style={theme.background}>
            <Text>Dashboard</Text>
        </SafeAreaView>
    );
};

export default AppTab;