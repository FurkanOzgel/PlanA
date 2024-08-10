import React from 'react';
import {
    SafeAreaView,
    FlatList
  } from 'react-native';

import { useSelector } from 'react-redux';

import styles from './NoteList.style';
import { theme, colors } from '../../../styles/theme.style';

import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import NoteCard from './components/NoteCard';

function NoteList({navigation}: any): React.JSX.Element {

    function handleAdd() {
        navigation.navigate('Note');
        navigation.setOptions({ tabBarVisible: false });
    };

    const notes = useSelector((state: any) => state.Note.noteList);
    console.log(notes);

    return(
        <SafeAreaView style={theme.background}>
            <SearchBar/>
            <FlatList
                style={styles.flatList}
                data={notes}
                renderItem={({item}) => <NoteCard noteData={item.noteData}/>}
            />
            <AddButton onPress={handleAdd}/>
        </SafeAreaView>
    );
};

export default NoteList;