import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../../styles/theme.style';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    label: {
        marginLeft: 40,
        fontSize: 16,
        color: colors.text,
        alignItems: 'center',
    },
    list_emoji: {
        position: 'absolute',
        color: "white",
        fontSize:18,
    },
    left_side_container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;
