import React from 'react';
import {
    SafeAreaView,
    FlatList
  } from 'react-native';

import styles from './NoteList.style';
import { theme, colors } from '../../../styles/theme.style';

// import Target from '../../../assets/svg/target.svg';

import SearchBar from '../../../components/SearchBar';
import Note from '../../../components/Note';
import AddButton from '../../../components/AddButton';

function handleAdd() {
    console.log("hi");
    console.log("tas")
};

function NoteList(): React.JSX.Element {
    return(
        <SafeAreaView style={theme.background}>
            <SearchBar/>
            <AddButton onPress={handleAdd}/>
            {/* <Target/> */}
        </SafeAreaView>
    );
};

export default NoteList;