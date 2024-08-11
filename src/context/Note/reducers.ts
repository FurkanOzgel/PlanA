import { NoteList } from './models';
import {NoteListActionTypes, ADD_NOTE, DELETE_NOTE, PIN_NOTE, EDIT_NOTE} from './actionTypes';

const initialState: NoteList = {
    noteList: []
};

export function noteListReducer(
    state = initialState,
    action: NoteListActionTypes,
): NoteList {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                noteList: [...state.noteList, { ...action.payload }]
            };
        case DELETE_NOTE:
            const noteIndexToDelete = state.noteList.findIndex(note => note.id == action.payload);
            return {
                ...state,
                noteList: state.noteList.filter((_, index) => index !== noteIndexToDelete)
            };
            
        case EDIT_NOTE:
            const editedNoteIndex = state.noteList.findIndex(note => note.id === action.payload.id);
            return {
                ...state,
                noteList: state.noteList.map((note, index) => {
                    if (index === editedNoteIndex) {
                        return action.payload;
                    }
                    return note;
                })
            };
        case PIN_NOTE:
            return {
                ...state,
                noteList: state.noteList.filter((_, index) => index !== 5)
            };
        default:
        return state;
  }
}