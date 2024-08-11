import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { theme, colors } from "../../../../../styles/theme.style";
import { NoteData } from "../../../../../context/Note/models";
import { useNavigation } from "@react-navigation/native";
import Note from "../../../Note";

import { StackNavigationProp } from '@react-navigation/stack';

interface NoteCardProps {
    noteData: NoteData;
}

type RootStackParamList = {
    Note: { NoteData: NoteData } | undefined;
};

const NoteCard = ({noteData}: NoteCardProps) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleGoNote = () => {
        navigation.navigate('Note', {NoteData: noteData});
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleGoNote}>
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
});

export default NoteCard;