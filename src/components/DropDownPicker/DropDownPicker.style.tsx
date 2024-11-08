import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    topContainer: {
        marginLeft: 15
    },
    container: {
        margin: 10,
        borderRadius: 10, 
        backgroundColor: '#ddd'
    },
    dropdownHeader: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 10, // Same border radius as container
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    placeholderText: {
        fontSize: 16,
        color: '#999',
    },
    listContainer: {
        borderRadius: 10, // Border radius for the list container to match the dropdown
        overflow: 'hidden', // Ensures border radius applies to children,
        position: 'absolute',
        top: 50,
        width: '100%',

    },
    activeItem: {
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    deactiveItem: {
        padding: 10,
        backgroundColor: 'green',
    },
    activeLabel: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    deactiveLabel: {
        color: '#333',
    },
});
