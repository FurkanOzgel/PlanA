import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import styles from './NoteList.style';
import { theme, colors } from '../../../styles/theme.style';

import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';
import NoteCard from './components/NoteCard';
import SelectionBar from './components/SelectionBar';

function NoteList({navigation}: any): React.JSX.Element {

    const [selectedNotes, setSelectedNotes] = useState<number[]>([]);
    const [onSelectMode, setOnSelectMode] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if(selectedNotes.length == 0){
            setOnSelectMode(false);
            StatusBar.setBackgroundColor(colors.background, true);
        }else{
            setOnSelectMode(true);
            StatusBar.setBackgroundColor(colors.component_backgroud, true);
        }
    }, [selectedNotes]);

    function handleAdd() {
        navigation.navigate('Note');
        navigation.setOptions({ tabBarVisible: false });
    };

    function handleDelete() {
        selectedNotes.forEach((noteId) => {
            dispatch({type: 'DELETE_NOTE', payload: noteId});
        });
        setSelectedNotes([]);
    };

    const notes = useSelector((state: any) => state.Note.noteList);

    return(
        <SafeAreaView style={theme.background}>
            {onSelectMode ? <SelectionBar onDeleteSelected={handleDelete}/>: <SearchBar/>}
            <FlatList
                style={styles.flatList}
                data={notes}
                renderItem={({item}) => <NoteCard noteData={item} selectedNotes={selectedNotes} setSelectedNotes={setSelectedNotes}/>}
            />
            <AddButton onPress={handleAdd}/>
        </SafeAreaView>
    );
};

export default NoteList;