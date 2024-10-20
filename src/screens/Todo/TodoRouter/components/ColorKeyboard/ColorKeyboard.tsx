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
    index: number;
}

function ColorKeyboard({onColorChange, colorState}: any ): React.JSX.Element {
    
    function ColorButton({color, borderColor, index}: ColorButtonProps): React.JSX.Element {
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
            <ColorButton index={0} color='#778BDE' borderColor='#778BDE'/>
            <ColorButton index={1} color='#BC79BC' borderColor='#BC79BC'/>
            <ColorButton index={2} color='#E46D8D' borderColor='#E46D8D'/>
            <ColorButton index={3} color='#E46B68' borderColor='#E46B68'/>
            <ColorButton index={4} color='#4AA079' borderColor='#4AA079'/>
            <ColorButton index={5} color='#479E98' borderColor='#479E98'/>
            <ColorButton index={6} color='#8795A0' borderColor='#8795A0'/>
            <ColorButton index={7} color='#E2EDFC' borderColor='#335FA0'/>
            <ColorButton index={8} color='#F2E7F8' borderColor='#705388'/>
            <ColorButton index={9} color='#FFE4E9' borderColor='#A44666'/>
            <ColorButton index={10} color='#F9E8DE' borderColor='#9C4F38'/>
            <ColorButton index={11} color='#D5F1E5' borderColor='#226B4D'/>
            <ColorButton index={12} color='#D4F1EF' borderColor='#1E3D3E'/>
            <ColorButton index={13} color='#E7ECF0' borderColor='#5B626C'/>
        </ScrollView>
    );
};

export default ColorKeyboard;
