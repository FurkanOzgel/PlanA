import React, {useState} from 'react';
import {
    View,
    Modal,
    TextInput
  } from 'react-native';

import styles from './PopUpInput.style';

import TextButton from '../../../../../components/TextButton';
import { theme } from '../../../../../styles/theme.style';

import { useDispatch } from 'react-redux';
import { generateRandomId } from '../../../../../utils/id';

interface PopUpInputProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

function PopUpInput({visible, setVisible}: PopUpInputProps ): React.JSX.Element {
    const [groupName, setGroupName] = useState('');

    const dispatch = useDispatch();

    const createGroup = () => {
        setVisible(!visible);
        setGroupName('');

        const group = {
            name: groupName,
            id: generateRandomId(),
            color: "#000000",
            icon: "list",
            tasks: []
        };

        dispatch({type: 'ADD_LIST', payload: group});
    };

    const cancelInput = () => {
        setVisible(!visible);
        setGroupName('');
    };

    return(
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(!visible);
                }}
        >
            <View style={styles.modalContainer}>
            <View style={styles.modalView}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={theme.text.color}
                    placeholder="Group Name"
                    value={groupName}
                    onChangeText={setGroupName}
                    spellCheck={false}
                    autoCorrect={false}
                />
                <View style={styles.buttons}>
                    <TextButton text="Cancel" textStyle={theme.text} onPress={cancelInput} />
                    <TextButton text="Create" textStyle={theme.text} onPress={createGroup} />
                </View>
            </View>
            </View>
        </Modal>
    );
};

export default PopUpInput;
