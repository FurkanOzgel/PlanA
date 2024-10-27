import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import styles from './EmojiKeyboard.style';
import TextButton from '../../../../../components/TextButton';

interface EmojiKeyboardProps {
    setIcon: (emoji: string) => void;
    defaultIcon: string;
    setIsActive: (isActive: boolean) => void;
}

function EmojiKeyboard({setIcon, defaultIcon, setIsActive}: EmojiKeyboardProps): React.JSX.Element {
    const emojis = "✅,📝,📅,⏰,📌,⭐,⚡,💡,🎯,📋,🗂,📊,📈,💼,🖊️,🖇️,📎,✏️,⏳,⌛,📆,⏲️,🔔,⏱,🏁,🏆,🎖,👏,🚀,💪,🏅,🎉,✨,🧠,🧘‍♂️,🏃‍♂️,💤,🍎,📚,💻,🎨,📞,💬,📧,✉️,🤝,📢,🔊,📲,🔍,🔒,🗑️,🛠️,🔧,🔨,⚙️,💭,🎶,🎵"

    function handleEmojiPress(emoji: string) {
        setIcon(emoji);
        setIsActive(false);
    }

    function handleRemovePress() {
        setIcon(defaultIcon);
        setIsActive(false);
    }

    function renderEmoji({ item }: { item: string }): React.JSX.Element {
        return (
            <TouchableOpacity style={styles.emoji_btn} onPress={() => handleEmojiPress(item)}>
                <Text style={styles.emoji}>{item}</Text>
            </TouchableOpacity>
        );
    }

    return(
        <View>
            <FlatList
                style={styles.flat_list}
                data={emojis.split(',')}
                numColumns={7}
                renderItem={renderEmoji}
            />
            <TextButton text="Remove Emoji" style={styles.remove_btn} textStyle={styles.remove_btn_text}
                onPress={handleRemovePress}/>
        </View>
    );
};

export default EmojiKeyboard;
