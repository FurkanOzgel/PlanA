import React, {useState} from 'react';
import {
    View,
    Modal,
    TextInput,
    Text
  } from 'react-native';

import styles from './PopUpInput.style';

import TextButton from '../../../../../components/TextButton';
import IconButton from '../../../../../components/IconButton';
import { theme } from '../../../../../styles/theme.style';
import { addEmoji } from '../../../../../assets/svg';

import { useDispatch } from 'react-redux';
import { generateRandomId } from '../../../../../utils/id';
import ColorKeyboard from '../ColorKeyboard';

interface PopUpInputProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

function PopUpInput({visible, setVisible}: PopUpInputProps ): React.JSX.Element {
    const [groupName, setGroupName] = useState('');
    const defaultColor = '#778BDE';
    const [color, setColor] = useState(defaultColor);

    const dispatch = useDispatch();

    const createGroup = () => {
        setVisible(!visible);
        setGroupName('');
        setColor(defaultColor);

        const group = {
            name: groupName,
            id: generateRandomId(),
            color: color,
            icon: "list",
            tasks: []
        };

        dispatch({type: 'ADD_LIST', payload: group});
    };

    const cancelInput = () => {
        setVisible(!visible);
        setGroupName('');
        setColor(defaultColor);
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
            <View style={styles.modal_container}>
                <View style={styles.modal_view}>
                    <Text style={styles.modal_text}>New List</Text>
                    <View style={styles.input_section}>
                        <IconButton onPress={() => {}} svg={addEmoji}/>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={theme.text.color}
                            placeholder="List Name"
                            value={groupName}
                            onChangeText={setGroupName}
                            spellCheck={false}
                            autoCorrect={false}
                            />
                    </View>
                    <View>
                        <ColorKeyboard colorState={color} onColorChange={setColor}/>
                    </View>
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
