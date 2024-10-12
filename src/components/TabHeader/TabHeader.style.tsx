import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme.style';

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: colors.text,
    },
    container: {
        backgroundColor: colors.background,
        padding: 10
    }
});

export default styles;
