import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:"red", 
        alignSelf:"center",
        padding: 10,
        gap: 5,
        maxWidth: "70%",
    },
    repeatMode: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        backgroundColor: "blue",
    },
    selectedMode : {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        backgroundColor: "blue"
    },
    modeView: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center"
    }
});

export default styles;
