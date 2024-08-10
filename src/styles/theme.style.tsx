import { StyleSheet } from 'react-native';

const theme = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'normal'
    },
    background: {
        backgroundColor: '#202020',
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

});

const colors = {
    text: '#FFFFFF',
    background: '#202020',
    component_backgroud : '#252525',
    component_text_tint: '#707070',
    component_header_text_tint: '#DEDEDE',
    active_tab_icon_tint: '#A8A8A8',
    inactive_tab_icon_tint: '#5A5A5A',
    border: '#555454',
    placeholder: '#858484'
};

export { theme, colors };