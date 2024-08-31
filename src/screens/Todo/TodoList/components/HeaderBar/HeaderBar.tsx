import React from "react";
import { View, Text, Button } from "react-native";

import { SvgXml } from "react-native-svg";

import  IconButton from "../../../../../components/IconButton";
import { theme, colors } from "../../../../../styles/theme.style";
import { arrowBack } from "../../../../../assets/svg";

interface HeaderBarProps {
    onBackPress: () => void;
    selectionMode?: boolean;
    handleDelete?: () => void;
}

const HeaderBar = ({onBackPress, selectionMode, handleDelete}: HeaderBarProps): React.JSX.Element => {
    return (
        <View style={{backgroundColor: colors.background}}>
            <IconButton onPress={onBackPress} svg={arrowBack}/>
            {selectionMode && <Button title="Delete" color={"red"} onPress={handleDelete}/>}
        </View>
    );
}

export default HeaderBar;