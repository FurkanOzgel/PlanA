import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    emoji_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 37,
        width: 37
    },
    emoji: {
        color: 'white',
        fontSize: 25,
    },
    flat_list: {
        height:90,
    },
    remove_btn: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    remove_btn_text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'normal'
    }
});

export default styles;