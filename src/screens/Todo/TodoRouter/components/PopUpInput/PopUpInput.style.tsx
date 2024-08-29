import { StyleSheet } from 'react-native';
import { colors } from '../../../../../styles/theme.style';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: 300,
        padding: 20,
        backgroundColor: colors.component_backgroud,
        borderRadius: 10,
        alignItems: 'center',
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
        justifyContent:"space-between"
    },
    input: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.text,
        color: "white"
    }
});

export default styles;
