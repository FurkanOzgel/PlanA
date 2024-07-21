import { StyleSheet } from 'react-native';
import { theme, colors } from '../../styles/theme.style';

const styles = StyleSheet.create({
    btn_touchable:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_container:{
        height:40,
        width:40,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: colors.component_backgroud,
        
    },
    btn_icon: {
        color: 'white'
    }
});

export default styles;