import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput
  } from 'react-native';

import { SvgXml } from 'react-native-svg';

import styles from './SearchBar.style';
import { theme, colors } from '../../styles/theme.style';
import { searchIcon } from '../../assets/svg';

interface SearchBarProps {
    onValueChange: (value: string) => void;
}

function SearchBar({onValueChange}: SearchBarProps): React.JSX.Element {
    return(
        <SafeAreaView style={styles.seacrh_bar_container}>
            <View style={styles.icon_container}>
                <SvgXml xml={searchIcon} height={24} width={24}/>
            </View>
            <TextInput placeholder='Search' placeholderTextColor={colors.component_text_tint} style = {{width:'100%'}} onChangeText={onValueChange}/>
        </SafeAreaView>
    );
};

export default SearchBar;