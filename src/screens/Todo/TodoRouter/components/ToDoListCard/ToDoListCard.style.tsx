import { StyleSheet } from 'react-native';
import { colors } from '../../../../../styles/theme.style';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 5,
        marginTop: 0
    },
    label: {
        fontSize: 16,
        color: colors.text,
    }
});

export default styles;
