import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:"red", 
        // height: 190,
        alignSelf:"center",
        padding: 10,
        gap: 5,
        marginBottom: 200,
        maxWidth: "70%",
    },
    repeatMode: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
    },
    selectedMode : {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        backgroundColor: "blue"
    },
    modeView: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default styles;
