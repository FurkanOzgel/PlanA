import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { theme, colors } from "../../../../../styles/theme.style";
import { NoteData } from "../../../../../context/Note/models";

interface NoteCardProps {
    noteData: NoteData;
}

const NoteCard = ({noteData}: NoteCardProps) => {
    const handleGoNote = () => {
        console.log("Go to Note");
        console.log(noteData.id);
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