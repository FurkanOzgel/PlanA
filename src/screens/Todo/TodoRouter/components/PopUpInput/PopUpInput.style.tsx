import { StyleSheet } from 'react-native';
import { colors } from '../../../../../styles/theme.style';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal_view: {
        width: 300,
        padding: 20,
        backgroundColor: colors.component_backgroud,
        borderRadius: 10,
    },
    modal_text: {
        marginBottom: 15,
        color: colors.text,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        alignSelf: 'flex-end',
        justifyContent:"space-between"
    },
    input: {
        flex: 1,
        margin: 10,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.text,
        color: colors.text,
        marginVertical: 12
    },
    input_section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    emoji_btn_text: {
        color: colors.text,
        fontSize: 25,
        marginBottom: 3
    }
});

export default styles;
