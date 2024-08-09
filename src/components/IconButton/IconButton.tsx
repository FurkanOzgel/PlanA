import React from 'react';
import { TouchableOpacity } from 'react-native';

import { SvgXml } from 'react-native-svg';

import { colors } from '../../styles/theme.style';

interface IconButtonProps {
    onPress: () => void;
    svg: string;
    style?: object;
    height?: number;
    width?: number;
    fill?: string;
}

function IconButton({ onPress, svg, style, height=25, width=25, fill='#e8eaed' }: IconButtonProps): React.JSX.Element {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <SvgXml testID='svg' xml={svg} height={height} width={width} fill={fill}/>
        </TouchableOpacity>
    );
}

export default IconButton;