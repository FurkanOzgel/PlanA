import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { theme, colors } from "../../../../../styles/theme.style";
import { NoteData } from "../../../../../context/Note/models";
import { useNavigation } from "@react-navigation/native";
import Note from "../../../Note";

import { StackNavigationProp } from '@react-navigation/stack';

interface NoteCardProps {
    noteData: NoteData;
    selectedNotes: number[];
    setSelectedNotes: (notes: number[]) => void;
}

type RootStackParamList = {
    Note: { NoteData: NoteData } | undefined;
};

const NoteCard = ({noteData, selectedNotes, setSelectedNotes}: NoteCardProps) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const isSelected = selectedNotes.includes(noteData.id);

    const handleGoNote = () => {
        if(selectedNotes.length == 0){ // Go to note
            navigation.navigate('Note', {NoteData: noteData});
        } else if(selectedNotes.includes(noteData.id)){ // Unselect
            setSelectedNotes(selectedNotes.filter((id) => id != noteData.id));
        } else { // Select with touch
            setSelectedNotes([...selectedNotes, noteData.id]);
        }
    };

    const onLongPress = () => {
        if (!selectedNotes.includes(noteData.id)) {
            setSelectedNotes([...selectedNotes, noteData.id]);
        } else {
            setSelectedNotes(selectedNotes.filter((id) => id != noteData.id));
        }
    };

    return (
        <TouchableOpacity style={[styles.container, isSelected ? styles.selected: null]} onPress={handleGoNote} onLongPress={onLongPress}>
            <Text style={theme.h2}>{noteData.title}</Text>
            <Text style={theme.text}>{noteData.note}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        backgroundColor: colors.background,
        marginBottom: 10,
        borderColor: colors.border,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    selected: {
        borderColor: "white",
        borderWidth: 2
    }

});

export default NoteCard;