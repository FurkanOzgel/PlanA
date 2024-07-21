import { NoteList } from './models';
import {NoteListActionTypes, ADD_NOTE, DELETE_NOTE, PIN_NOTE, UPDATE_NOTE} from './actionTypes';

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
            const productIndexToDelete = state.noteList.findIndex(product => product.id === action.payload.id);
            return {
                ...state,
                noteList: state.noteList.filter((_, index) => index !== productIndexToDelete)
            };
            
        case UPDATE_NOTE:
            return {
                ...state,
                noteList: state.noteList.filter((_, index) => index !== 5)
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