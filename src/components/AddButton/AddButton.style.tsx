import { StyleSheet, Dimensions } from 'react-native';
import { theme, colors } from '../../styles/theme.style';

const styles = StyleSheet.create({
    btn_touchable:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_container:{
        height:60,
        width:60,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        top: Dimensions.get('window').height - 130,
        right: 10,
        backgroundColor: colors.button_background,
        borderRadius: 20   
    }
});

export default styles;