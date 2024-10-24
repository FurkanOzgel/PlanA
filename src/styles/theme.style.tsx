import { StyleSheet, Dimensions } from 'react-native';

const mode: string = 'dark';
let colors: any;

const darkColorPalatte = {
    text: '#FFFFFF',
    background: 'black',
    component_backgroud : '#323338',
    button_background: '#5271ff',
    component_text_tint: '#707070',
    component_header_text_tint: '#DEDEDE',
    active_tab_icon_tint: '#A8A8A8',
    inactive_tab_icon_tint: '#5A5A5A',
    border: '#555454',
    placeholder: '#858484',
    default_toDo_color: '#778BDE'
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
    placeholder: '#858484',
    default_toDo_color: '#778BDE'
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
    },
    hr: {
        height: 1,
        backgroundColor: '#fff',
        width: Dimensions.get("window").width - 26,
        alignSelf: "center",
        marginVertical: 5
    }
});

export { theme, colors };