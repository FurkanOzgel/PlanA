import { StyleSheet } from 'react-native';
import { colors } from '../../../../../styles/theme.style';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    label: {
        fontSize: 16,
        color: colors.text,
        alignItems: 'center',
        fontWeight: 'bold'
    },
    list_emoji: {
        color: "white",
        marginRight:10,
        fontSize:18
    },
    left_side_container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;
