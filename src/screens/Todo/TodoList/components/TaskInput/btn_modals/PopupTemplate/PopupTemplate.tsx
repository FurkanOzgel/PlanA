import React, {useState} from 'react';
import { View, Dimensions, TouchableWithoutFeedback, StyleSheet } from 'react-native';

interface PopupTemplateProps {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (visible: string) => void;
    containerHeight: number;
}

function PopupTemplate({children ,visible, setVisible, containerHeight}: PopupTemplateProps): React.JSX.Element {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    
    const styles = StyleSheet.create({
        cancelArea: {
            height: Dimensions.get("window").height, 
            width:"100%", 
            position: "absolute", 
            top:-(Dimensions.get("window").height - containerHeight)
        }
    });
    
    if (!visible) {
        return <></>;
    }

    return(
        <View>
            <TouchableWithoutFeedback onPress={() => setVisible('')}>
                <View style={styles.cancelArea}/>
            </TouchableWithoutFeedback>
            {children}
        </View>
    );
};

export default PopupTemplate;
