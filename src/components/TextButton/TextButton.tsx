import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface TextButtonProps {
    onPress: () => void;
    text: string;
    style?: object;
    textStyle?: object;
}

function TextButton({ onPress, text, style, textStyle }: TextButtonProps): React.JSX.Element {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

export default TextButton;