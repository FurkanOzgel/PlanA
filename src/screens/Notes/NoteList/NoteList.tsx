import React from 'react';
import {
    SafeAreaView,
    FlatList
  } from 'react-native';

import styles from './NoteList.style';
import { theme, colors } from '../../../styles/theme.style';

import SearchBar from '../../../components/SearchBar';
import AddButton from '../../../components/AddButton';

function NoteList({navigation}: any): React.JSX.Element {

    function handleAdd() {
        navigation.navigate('Note');
        navigation.setOptions({ tabBarVisible: false });
    };

    return(
        <SafeAreaView style={theme.background}>
            <SearchBar/>
            {/* FlatList */}
            <AddButton onPress={handleAdd}/>
        </SafeAreaView>
    );
};

export default NoteList;