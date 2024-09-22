import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        backgroundColor: '#ddd',
        overflow: 'hidden', // Ensures border radius applies to children
    },
    activeItem: {
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    deactiveItem: {
        padding: 10,
        backgroundColor: '#fff',
    },
    activeLabel: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    deactiveLabel: {
        color: '#333',
    },
});
