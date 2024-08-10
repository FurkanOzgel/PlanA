import React, {useState} from 'react';
import {
    SafeAreaView,
    TextInput,
  } from 'react-native';

import  styles from './Note.style';
import { theme, colors } from '../../../styles/theme.style';
import HeaderBar from './components/HeaderBar';
import { NoteData } from "../../../context/Note/models"

import { useDispatch } from 'react-redux';

function Note({navigation}: any): React.JSX.Element {

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const dispatch = useDispatch();

    const saveNote = () => {
        const noteData: NoteData = {
            id: 0,
            title: title,
            note: note,
            color: 'white',
            date: new Date().getTime().toString(),
            isPinned: false
        }

        dispatch({type: 'ADD_NOTE', payload: {noteData}});
    };

    const handleBackPress = () => {
        if (title !== '' || note !== '') {
            saveNote();
        }
        navigation.goBack();
    }

    return(
        <SafeAreaView style={theme.background}>
            <HeaderBar onBackPress={handleBackPress} />
            <TextInput style={theme.h1} placeholder="Title" 
                placeholderTextColor={colors.placeholder}
                onChangeText={(text) => setTitle(text)}/>
            <TextInput style={[theme.text, styles.noteInput]} placeholder="Note"
                multiline={true} placeholderTextColor={colors.placeholder} 
                onChangeText={(text) => setNote(text)}
                textAlignVertical='top'/>
        </SafeAreaView>
    );
};

export default Note;