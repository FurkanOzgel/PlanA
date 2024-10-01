import React from "react";
import { TouchableWithoutFeedback, GestureResponderEvent } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { SvgXml } from "react-native-svg";

import { colors } from "../../styles/theme.style";
import { timerIcon, targetIcon, todoIcon, notesIcon, dashboardIcon } from "../../assets/svg";

import { Note, NoteList } from "../../screens/Notes";
import { TodoRouter, TodoList } from "../../screens/Todo";
import { Timer } from "../../screens/FocusTimer";
import { Target } from "../../screens/Targets";
import { Board, Settings } from "../../screens/Dashboard";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppTab = (): React.JSX.Element => {
    return (
    <Tab.Navigator initialRouteName="ToDoTab"
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
                if(route.name === 'FocusTimerTab'){
                    return <SvgXml xml={timerIcon} width={24} height={24} fill={props.color}/>
                }
                else if(route.name ==='TargetTab'){
                    return <SvgXml xml={targetIcon} width={24} height={24} fill={props.color}/>
                }
                else if(route.name ==='NotesTab'){
                    return <SvgXml xml={notesIcon} width={24} height={24} fill={props.color}/>
                }
                else if(route.name === 'ToDoTab'){
                    return <SvgXml xml={todoIcon} width={24} height={24} fill={props.color}/>
                }
                else if(route.name === 'DashboardTab'){
                    return <SvgXml xml={dashboardIcon} width={24} height={24} fill={props.color}/>
                }
        }}}}>
        <Tab.Screen name="ToDoTab" component={ToDoStack} />
        <Tab.Screen name="FocusTimerTab" component={TimerStack} />
        <Tab.Screen name="DashboardTab" component={DashboardStack} />
        <Tab.Screen name="TargetTab" component={TargetStack} />
        <Tab.Screen name="NotesTab" component={NotesStack} />
    </Tab.Navigator>
    );
};


const TimerStack = (): React.JSX.Element  => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forNoAnimation}}>
            <Stack.Screen name="Timer" component={Timer} />
        </Stack.Navigator>
    );
};  

const TargetStack = (): React.JSX.Element  => {          
    return (
        <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forNoAnimation}}>
            <Stack.Screen name="Target" component={Target} />
        </Stack.Navigator>
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
        <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forNoAnimation}}>
            <Stack.Screen name="Board" component={Board} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
};

export default AppTab;