import { StyleSheet } from 'react-native';

const mode: string = 'dark';
let colors: any;

const darkColorPalatte = {
    text: '#FFFFFF',
    background: 'black',
    component_backgroud : '#5271ff',
    button_background: '#5271ff',
    component_text_tint: '#707070',
    component_header_text_tint: '#DEDEDE',
    active_tab_icon_tint: '#A8A8A8',
    inactive_tab_icon_tint: '#5A5A5A',
    border: '#555454',
    placeholder: '#858484'
};

const lightColorPalatte = {
    text: '#FFFFFF',
    background: 'white',
    component_backgroud : '#252525',
    button_background: '#5271ff',
    component_text_tint: '#707070',
    component_header_text_tint: '#DEDEDE',
    active_tab_icon_tint: '#A8A8A8',
    inactive_tab_icon_tint: '#5A5A5A',
    border: '#555454',
    placeholder: '#858484'
}

if( mode == 'dark') {
    colors = darkColorPalatte;
} else {
    colors = lightColorPalatte;
}

const theme = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'normal'
    },
    background: {
        backgroundColor: colors.background,
        flex: 1
    },
    h1: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold'
    },
    h2: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export { theme, colors };