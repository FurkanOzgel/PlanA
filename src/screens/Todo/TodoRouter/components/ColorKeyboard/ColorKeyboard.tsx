import React from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import styles from './ColorKeyboard.style';

interface ColorButtonProps {
    color: string;
    borderColor: string;
}

function ColorKeyboard({onColorChange, colorState}: any ): React.JSX.Element {
    
    function ColorButton({color, borderColor}: ColorButtonProps): React.JSX.Element {
        const handlePress = () => {
            onColorChange(color);
        }
        return(
            <TouchableOpacity onPress={handlePress}>
                <View style={[styles.color_button, {backgroundColor: color, borderColor: borderColor}]}>
                    {colorState== color ? <View style={styles.selected_color_inner_view}></View> : null}
                </View>
            </TouchableOpacity>
        );
    }


    return(
        <ScrollView style={styles.scrollable_container} horizontal={true}>
            <ColorButton color='#778BDE' borderColor='#778BDE'/>
            <ColorButton color='#BC79BC' borderColor='#BC79BC'/>
            <ColorButton color='#E46D8D' borderColor='#E46D8D'/>
            <ColorButton color='#E46B68' borderColor='#E46B68'/>
            <ColorButton color='#4AA079' borderColor='#4AA079'/>
            <ColorButton color='#479E98' borderColor='#479E98'/>
            <ColorButton color='#8795A0' borderColor='#8795A0'/>
            <ColorButton color='#E2EDFC' borderColor='#335FA0'/>
            <ColorButton color='#F2E7F8' borderColor='#705388'/>
            <ColorButton color='#FFE4E9' borderColor='#A44666'/>
            <ColorButton color='#F9E8DE' borderColor='#9C4F38'/>
            <ColorButton color='#D5F1E5' borderColor='#226B4D'/>
            <ColorButton color='#D4F1EF' borderColor='#1E3D3E'/>
            <ColorButton color='#E7ECF0' borderColor='#5B626C'/>
        </ScrollView>
    );
};

export default ColorKeyboard;
