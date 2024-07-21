import { Note } from './models';
export const ADD_NOTE = 'ADD_NOTE';
export const PIN_NOTE = 'PIN_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE'

interface AddNoteAction {
    type: typeof ADD_NOTE;
    payload: Note;
}

interface PinNoteAction {
    type: typeof PIN_NOTE;
    payload: Note;
}

interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    payload: Note;
}

interface UpdateNoteAction {
    type: typeof UPDATE_NOTE;
    payload: Note;
}

export type NoteListActionTypes = AddNoteAction | PinNoteAction | DeleteNoteAction | UpdateNoteAction