import { StyleSheet } from 'react-native';

const theme = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'normal'
    },
    background: {
        backgroundColor: '#202020',
        flex: 1
    }
});

const colors = {
    background: '#202020',
    component_backgroud : '#252525',
    component_text_tint: '#707070',
    component_header_text_tint: '#DEDEDE',
    active_tab_icon_tint: '#A8A8A8',
    inactive_tab_icon_tint: '#5A5A5A',
    border: '#333232'
};

export { theme, colors };