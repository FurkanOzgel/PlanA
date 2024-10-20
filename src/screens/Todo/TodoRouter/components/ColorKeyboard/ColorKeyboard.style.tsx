import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollable_container: {
        flexDirection: 'row',
    },
    color_button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 5,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected_color_inner_view: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

export default styles;
