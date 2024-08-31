import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'gray',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    selected:{
        borderColor: "white",
        borderWidth: 2
    }
});

export default styles;
