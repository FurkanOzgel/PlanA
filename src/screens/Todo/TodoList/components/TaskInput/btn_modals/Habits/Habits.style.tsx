import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red",
        // width: 100,
        height: 100,
    },
    text: { 
        fontSize: 20,
        fontWeight: 'bold',
    },
    dayContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: "blue",
        flexWrap: 'wrap',
    },
    selectedType: {
        backgroundColor: "white",
    },

});

export default styles;
