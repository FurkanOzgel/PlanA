import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    hr: {
        height: 1,
        backgroundColor: '#fff',
        width: Dimensions.get("window").width - 26,
        alignSelf: "center",
        marginVertical: 5
    }
});