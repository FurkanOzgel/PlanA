import { StyleSheet } from 'react-native';
import { colors } from '../../../../../styles/theme.style';

const styles = StyleSheet.create({
    listCard: {
        backgroundColor: colors.component_backgroud,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    listText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default styles;
