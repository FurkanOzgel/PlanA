import React from 'react';
import {
    SafeAreaView,
    Text,
    StatusBar
  } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SvgXml } from 'react-native-svg';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { theme, colors } from './styles/theme.style';
import Note from './screens/Notes/Note';
import NoteList from './screens/Notes/NoteList';
import { timerIcon, targetIcon, todoIcon, notesIcon, friendIcon } from './assets/svg';
import store from './context/store';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor(colors.background, true);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = (): React.JSX.Element => {
    return (
        <NavigationContainer>
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
                        else if(route.name === 'DisciplineFriend'){
                            return <SvgXml xml={friendIcon} width={24} height={24} fill={props.color}/>
                        }
                }}}}>
                <Tab.Screen name="Timer" component={TimerStack} />
                <Tab.Screen name="Target" component={TargetStack} />
                <Tab.Screen name="Notes" component={NotesStack} />
                <Tab.Screen name="ToDo" component={ToDoStack} />
                <Tab.Screen name="DisciplineFriend" component={DisciplineFriendStack} />
            </Tab.Navigator>
        </NavigationContainer>
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
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="NoteList" component={NoteList} />
            <Stack.Screen name="Note" component={Note} />
        </Stack.Navigator>
    );
};

const ToDoStack = (): React.JSX.Element  => {   
    return (
        <SafeAreaView style={theme.background}>
            <Text>ToDoStack</Text>
        </SafeAreaView>
    );
};

const DisciplineFriendStack = (): React.JSX.Element  => {   
    return (
        <SafeAreaView style={theme.background}>
            <Text>DisciplineFriend</Text>
        </SafeAreaView>
    );
};

const App = (): React.JSX.Element => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;