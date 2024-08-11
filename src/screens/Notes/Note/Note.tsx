import React, {useState} from 'react';
import {
    SafeAreaView,
    TextInput,
  } from 'react-native';

import  styles from './Note.style';
import { theme, colors } from '../../../styles/theme.style';
import HeaderBar from './components/HeaderBar';
import { NoteData } from "../../../context/Note/models";

import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Note({navigation, route}: any): React.JSX.Element {

    let isNewNote;  
    route.params && 'NoteData' in route.params ? isNewNote = false : isNewNote = true;

    const [title, setTitle] = useState(isNewNote ? '' : route.params.NoteData.title);
    const [note, setNote] = useState(isNewNote ? '' : route.params.NoteData.note);
    const dispatch = useDispatch();

    const addNoteToRedux = (id: number) => {
        const noteData: NoteData = {
            id: id,
            title: title,
            note: note,
            color: 'white',
            date: new Date().getTime().toString(),
            isPinned: false
        }

        dispatch({type: 'ADD_NOTE', payload: noteData});
    };

    const saveNote = () => {
        if (isNewNote) {
            AsyncStorage.getItem('lastNoteId').then((value) => {
                if (value !== null) {
                    const id = parseInt(value) + 1;
                    AsyncStorage.setItem('lastNoteId', id.toString());
                    addNoteToRedux(id);
                } else {
                    AsyncStorage.setItem('lastNoteId', '0');
                    addNoteToRedux(0);
                }
            })
        }else{
            if (title != route.params.NoteData.title || note != route.params.NoteData.note) {
                const noteData: NoteData = {
                    id: route.params.NoteData.id,
                    title: title,
                    note: note,
                    color: route.params.NoteData.color,
                    date: new Date().getTime().toString(),
                    isPinned: route.params.NoteData.isPinned
                }
                dispatch({type: 'EDIT_NOTE', payload: noteData});
            }
        }
    };

    const handleBackPress = () => {
        if (title !== '' || note !== '') {
            saveNote();
        } else if (!isNewNote && (title === '' && note === '')) {
            dispatch({type: 'DELETE_NOTE', payload: route.params.NoteData.id});
            //TODO: Empty note deleted alert
        }
        navigation.goBack();
    }

    return(
        <SafeAreaView style={theme.background}>
            <HeaderBar onBackPress={handleBackPress} />
            <TextInput style={theme.h1} placeholder="Title" 
                placeholderTextColor={colors.placeholder}
                onChangeText={(text) => setTitle(text)}
                value={title} spellCheck={false}
                autoCorrect={false}/>
            <TextInput style={[theme.text, styles.noteInput]} placeholder="Note"
                multiline={true} placeholderTextColor={colors.placeholder} 
                onChangeText={(text) => setNote(text)}
                textAlignVertical='top'
                value={note} spellCheck={false}
                autoCorrect={false}/>
        </SafeAreaView>
    );
};

export default Note;