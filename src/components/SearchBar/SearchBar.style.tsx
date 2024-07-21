import { StyleSheet } from 'react-native';
import { theme, colors } from '../../styles/theme.style';

const styles = StyleSheet.create({
    seacrh_bar_container: {
        backgroundColor: colors.component_backgroud,
        margin: 10,
        borderRadius: 20,
        flexDirection: 'row'
    },
    icon_container: {
        justifyContent: 'center',
        padding:10,
        alignItems:"center"
    },
    icon: {
        color: colors.component_text_tint
    }
});

export default styles;