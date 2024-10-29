import { StyleSheet } from 'react-native';
import { colors } from '../../../../../../styles/theme.style';

const styles = StyleSheet.create({
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
        fontWeight: 'thin'
    }
});

export default styles;
