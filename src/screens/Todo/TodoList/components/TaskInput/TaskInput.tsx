import React, {useState, useEffect, useRef} from 'react';
import {
    View,
    Modal,
    TextInput,
    Text,
    ScrollView,
    Keyboard,
    TouchableOpacity,
  } from 'react-native';

import styles from './TaskInput.style';
import { colors, theme } from '../../../../../styles/theme.style';

import { generateRandomId } from '../../../../../utils/id';
import { ToDoData } from '../../../../../context/ToDo/models';
import { addNotification, repeatSquare, trackChanges, flag, arrowBack, sun } from '../../../../../assets/svg';

import { useDispatch, useSelector } from 'react-redux';
import { SvgXml } from 'react-native-svg';
import ChooseList from './btn_modals/ChooseList';
import SetReminder from './btn_modals/SetReminder';

interface TaskInputProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    listId: number;
}

function TaskInput({visible, setVisible, listId}: TaskInputProps ): React.JSX.Element {
    const inputRef = useRef<TextInput>(null);

    const [task, setTask] = useState('');
    const [visibleBtnModal, setVisibleBtnModal] = useState('');
    const [listState, setListState] = useState(listId);

    const dispatch = useDispatch();
    const selector = useSelector((state: any) => state.ToDo);
    const list = selector.todoLists.find((list: any) => list.id === listState);
    const isDarkList = ["My Day", "All"].includes(list?.name);
    
    const [makeToday, setMakeToday] = useState(list.name == "My Day" ? true: false);

    useEffect(() => {
        if(visible){
            setTask('');
            const timer = setTimeout(() => {
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }, 500);
        }
    }, [visible]);

    useEffect(() => {
        const keyboardHideListener = Keyboard.addListener('keyboardDidHide', cancelInput);
        return () => {
            keyboardHideListener.remove();
        };
    }, []);

    const createTask = () => {
        const newTask: ToDoData = {
            isDone: false,
            title: task,
            time: new Date().toISOString(),
            id: generateRandomId(),
            isStarred: false,
            listId: listState,
            makeToday: makeToday ? new Date().toISOString() : undefined,
        };
        dispatch({ type: 'ADD_TODO', payload: newTask });
        setVisible(!visible);
        setTask('');
    }

    const cancelInput = () => {
        setVisible(false);
        setVisibleBtnModal('');
        setTask('');
    };

    const visibleModalSetter = (visibleModal: string) => {
        if(visibleBtnModal === visibleModal){
            setVisibleBtnModal('');
        } else {
            setVisibleBtnModal(visibleModal);
        }
    }

    const DownButton = ({ButtonSvg, Title, onPress}: {ButtonSvg: string, Title: string, onPress: () => void}): React.JSX.Element => {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.down_btn}>
                    <SvgXml xml={ButtonSvg} width="24" height="24" fill={theme.text.color} />
                    <Text style={styles.down_btn_text}>{Title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const ListButton = ({onPress}: {onPress: () => void}): React.JSX.Element => {
        const updatedList = selector.todoLists.filter((list: any) => list.id == listState)[0];
        return (
            <TouchableOpacity onPress={onPress}>
            {!updatedList.icon.includes("svg") ?
                <View style={styles.down_btn}>
                    <Text style={styles.down_btn_text}>{updatedList.icon}</Text>
                    <Text style={styles.down_btn_text}>{updatedList.name}</Text>
                </View>: isDarkList ? null:
                <View style={styles.down_btn}>
                    <SvgXml xml={updatedList.icon}/>
                    <Text style={styles.down_btn_text}>{updatedList.name}</Text>
                </View>}
            </TouchableOpacity>
        );
    }

    const MyDayButton = ({ButtonSvg, Title, onPress}: {ButtonSvg: string, Title: string, onPress: () => void}): React.JSX.Element => {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.down_btn, {backgroundColor: makeToday ? "blue": "rgb(0,0,0,0)"}]}>
                    <SvgXml xml={ButtonSvg} width="24" height="24" fill={theme.text.color} />
                    <Text style={styles.down_btn_text}>{Title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(!visible)}>
            <View style={styles.modalContainer}>
            <View style={styles.modalView}>
                <ChooseList visible={visibleBtnModal == "ChooseList"} setVisible={setVisibleBtnModal} 
                    listId={listState} setListId={setListState}/>
                <SetReminder visible={visibleBtnModal == "SetReminder"} setVisible={setVisibleBtnModal}/>
                <View style={{backgroundColor: colors.component_backgroud}}>
                <View style={styles.up_section}>
                    <View style={styles.circle}/>
                    <TextInput
                        ref={inputRef}
                        style={styles.input}
                        placeholderTextColor={theme.text.color}
                        placeholder="Task"
                        value={task}
                        onChangeText={setTask}
                        spellCheck={false}
                        autoCorrect={false}
                        />
                    <TouchableOpacity style={styles.summit_btn} onPress={createTask}>
                        <SvgXml xml={arrowBack} width={24} height={24} fill={colors.text} rotation={90}/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.down_section} horizontal={true} keyboardShouldPersistTaps='handled'>
                    <ListButton onPress={() => {visibleModalSetter('ChooseList')}}/>
                    <MyDayButton ButtonSvg={sun} Title="My Day" onPress={()=>{setMakeToday(!makeToday)}}/>
                    <DownButton ButtonSvg={addNotification} Title="Add Reminder" onPress={()=>{visibleModalSetter("SetReminder")}}/>
                    <DownButton ButtonSvg={repeatSquare} Title="Repeat" onPress={()=>{}}/>
                    <DownButton ButtonSvg={trackChanges} Title="Incremantable" onPress={()=>{}}/>
                    <DownButton ButtonSvg={flag} Title="New Habit" onPress={()=>{}}/>
                </ScrollView>
                </View>
            </View>
            </View>
        </Modal>
    );
};

export default TaskInput;
