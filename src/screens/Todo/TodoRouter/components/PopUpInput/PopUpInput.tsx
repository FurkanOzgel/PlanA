import React, {useState, useEffect} from 'react';
import {
    View,
    Modal,
    TextInput,
    Text
  } from 'react-native';

import styles from './PopUpInput.style';

import TextButton from '../../../../../components/TextButton';
import IconButton from '../../../../../components/IconButton';
import { colors, theme } from '../../../../../styles/theme.style';
import { addEmoji, list } from '../../../../../assets/svg';

import { useDispatch } from 'react-redux';
import { generateRandomId } from '../../../../../utils/id';
import ColorKeyboard from '../ColorKeyboard';
import EmojiKeyboard from '../EmojiKeyboard';

interface PopUpInputProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

function PopUpInput({visible, setVisible}: PopUpInputProps ): React.JSX.Element {
    const [groupName, setGroupName] = useState('');

    const defaultColor = colors.default_toDo_color;
    const [color, setColor] = useState(defaultColor);
    
    const defaultIcon = list;
    const [icon, setIcon] = useState(defaultIcon);

    const [emojiInputMode, setEmojiInputMode] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if(visible){
            setGroupName('');
            setColor(defaultColor);
            setIcon(defaultIcon);
        }
    }, [visible]);

    const createGroup = () => {
        setVisible(!visible);
        setGroupName('');
        setColor(defaultColor);
        setIcon(defaultIcon);

        const group = {
            name: groupName == '' ? 'Unnamed List' : groupName, 
            id: generateRandomId(),
            color: color,
            icon: icon,
            tasks: []
        };

        dispatch({type: 'ADD_LIST', payload: group});
    };

    const cancelInput = () => {
        setVisible(!visible);
        setGroupName('');
        setColor(defaultColor);
        setIcon(defaultIcon);
    };

    const handleAddEmoji = () => {
        setEmojiInputMode(!emojiInputMode);
    }

    return(
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(!visible);
                }}>
            <View style={styles.modal_container}>
                <View style={styles.modal_view}>
                    <Text style={styles.modal_text}>New List</Text>
                    <View style={styles.input_section}>
                        {icon == defaultIcon ? <IconButton onPress={handleAddEmoji} svg={addEmoji}/>:
                            <TextButton text={icon} onPress={handleAddEmoji} textStyle={styles.emoji_btn_text}/> }
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={colors.placeholder}
                            placeholder="List Name"
                            value={groupName}
                            onChangeText={setGroupName}
                            spellCheck={false}
                            autoCorrect={false}
                            />
                    </View>
                    <View>
                        {emojiInputMode ? <EmojiKeyboard setIcon={setIcon} defaultIcon={defaultIcon} setIsActive={setEmojiInputMode} />:
                            <ColorKeyboard colorState={color} onColorChange={setColor}/>}
                    </View>
                    {emojiInputMode ||
                    <View style={styles.buttons}>
                        <TextButton text="Cancel" textStyle={theme.text} onPress={cancelInput} />
                        <TextButton text="Create" textStyle={theme.text} onPress={createGroup} />
                    </View>
                    }
                </View>
            </View>
        </Modal>
    );
};

export default PopUpInput;
