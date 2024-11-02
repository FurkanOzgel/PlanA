import React, {useState, useEffect, useRef} from 'react';
import { View, Modal, TextInput, ScrollView, Keyboard, TouchableOpacity } from 'react-native';

// Styles
import styles from './TaskInput.style';
import { colors, theme } from '../../../../../styles/theme.style';

// Types
import { ToDoData } from '../../../../../context/ToDo/models';

// Utils
import { generateRandomId } from '../../../../../utils/id';

// Assets
import { addNotification, repeatSquare, trackChanges, flag, arrowBack, sun } from '../../../../../assets/svg';

//Libraries
import { useDispatch, useSelector } from 'react-redux';
import { SvgXml } from 'react-native-svg';

// Custom Components
import BottomBtn from './bottomButtons/BottomBtn';
import ListSelectionBtn from './bottomButtons/ListSelectionBtn';
import MyDayButton from './bottomButtons/MydayBtn';

import ListSelection from './btn_modals/ListSelection';
import SetReminder from './btn_modals/SetReminder';
import Repeat from './btn_modals/Repeat';

interface TaskInputProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    listId: number;
}

function TaskInput({visible, setVisible, listId}: TaskInputProps ): React.JSX.Element {
    // Refs
    const inputRef = useRef<TextInput>(null);

    // States
    const [task, setTask] = useState('');
    const [visibleBtnModal, setVisibleBtnModal] = useState('');
    const [listIdState, setListIdState] = useState(listId);
    
    const selector = useSelector((state: any) => state.ToDo);
    const list = selector.todoLists.find((list: any) => list.id === listIdState);
    const allTasksListId = selector.todoLists.find((list: any) => list.name === "All")?.id;
    
    const [makeToday, setMakeToday] = useState(list.name == "My Day" ? true: false);

    // Hooks
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

    // Functions
    const dispatch = useDispatch(); 

    function createTask() {
        const newTask: ToDoData = {
            isDone: false,
            title: task,
            time: new Date().toISOString(),
            id: generateRandomId(),
            isStarred: false,
            listId: list.name == "My Day" ? allTasksListId: listIdState,
            makeToday: makeToday ? new Date().toISOString() : undefined,
        };
        dispatch({ type: 'ADD_TODO', payload: newTask });
        setVisible(!visible);
        setTask('');
    }

    function cancelInput() {
        setVisible(false);
        setVisibleBtnModal('');
        setTask('');
    };

    function visibleModalSetter(visibleModal: string) {
        if(visibleBtnModal === visibleModal){
            setVisibleBtnModal('');
        } else {
            setVisibleBtnModal(visibleModal);
        }
    }

    return(
        <Modal transparent={true} visible={visible} onRequestClose={() => setVisible(!visible)}>
            <View style={styles.modalView}>
                {/* Modals that are visible when the bottom buttons are clicked */}
                <ListSelection visible={visibleBtnModal == "ChooseList"} setVisible={setVisibleBtnModal} 
                    listId={listIdState} setListId={setListIdState}/>
                <SetReminder visible={visibleBtnModal == "SetReminder"} setVisibleModalName={setVisibleBtnModal}/>
                <Repeat visible={visibleBtnModal == "Repeat"} setVisible={setVisibleBtnModal}/>

                {/* Main Task Input */}
                <View style={{backgroundColor: colors.component_backgroud}}>
                    {/* Input Section */}
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
                        {/* Submit Button */}
                        <TouchableOpacity style={styles.summit_btn} onPress={createTask}>
                            <SvgXml xml={arrowBack} width={24} height={24} fill={colors.text} rotation={90}/>
                        </TouchableOpacity>
                    </View>
                    {/* Bottom Buttons */}
                    <ScrollView style={styles.down_section} horizontal={true} keyboardShouldPersistTaps='handled'>
                        <ListSelectionBtn onPress={() => {visibleModalSetter('ChooseList')}} selector={selector} list={list} listIdState={listIdState}/>
                        <MyDayButton ButtonSvg={sun} Title="My Day" onPress={()=>{setMakeToday(!makeToday)}} makeToday={makeToday}/>
                        <BottomBtn ButtonSvg={addNotification} Title="Add Reminder" onPress={()=>{visibleModalSetter("SetReminder")}}/>
                        <BottomBtn ButtonSvg={repeatSquare} Title="Repeat" onPress={()=>{visibleModalSetter("Repeat")}}/>
                        <BottomBtn ButtonSvg={trackChanges} Title="Incremantable" onPress={()=>{}}/>
                        <BottomBtn ButtonSvg={flag} Title="New Habit" onPress={()=>{}}/>
                    </ScrollView>
                </View>
            </View>          
        </Modal>
    );
};

export default TaskInput;
