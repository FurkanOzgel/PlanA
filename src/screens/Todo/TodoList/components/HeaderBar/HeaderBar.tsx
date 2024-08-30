import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { SvgXml } from "react-native-svg";

import  IconButton from "../../../../../components/IconButton";
import { theme, colors } from "../../../../../styles/theme.style";
import { arrowBack } from "../../../../../assets/svg";

interface HeaderBarProps {
    onBackPress: () => void;
}

const HeaderBar = ({onBackPress}: HeaderBarProps): React.JSX.Element => {
    return (
        <View style={{backgroundColor: colors.background}}>
            <IconButton onPress={onBackPress} svg={arrowBack} />
        </View>
    );
}

export default HeaderBar;