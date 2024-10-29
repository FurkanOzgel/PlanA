import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../../styles/theme.style';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: colors.text,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
    },
    input: {
        width: Dimensions.get('window').width - 86,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.text,
        color: 'white',
    },
    summit_btn: {
        width: 30,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.default_toDo_color,
    },
    up_section: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
    },
    down_section: {
        width: Dimensions.get('window').width - 10,
        flexDirection: 'row',
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: colors.default_toDo_color,
        borderWidth: 2,
    },
    down_btn: {
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 2,
    },
    down_btn_text: {
        color: colors.text,
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'thin',
    }
});

export default styles;
