import React from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../../../../../components/IconButton";
import { bin } from "../../../../../assets/svg";

import { colors } from "../../../../../styles/theme.style";

type SelectionBarProps = {
    onDeleteSelected: () => void;
};

const SelectionBar = ({ onDeleteSelected }: SelectionBarProps) => {
    return (
        <View style={styles.container}>
            <IconButton svg={bin} onPress={onDeleteSelected} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        backgroundColor: colors.component_backgroud,
    },
    text: {
        fontSize: 20,
    },
});

export default SelectionBar;