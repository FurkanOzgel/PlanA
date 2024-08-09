import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { SvgXml } from "react-native-svg";
import { theme } from "../../../../../styles/theme.style";

const HeaderBar = ({navigation}: any): React.JSX.Element => {
    return (
        <View style={theme.background}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Text style={theme.text}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HeaderBar;