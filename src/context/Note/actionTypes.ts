import { NoteData } from './models';
export const ADD_NOTE = 'ADD_NOTE';
export const PIN_NOTE = 'PIN_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE'

interface AddNoteAction {
    type: typeof ADD_NOTE;
    payload: NoteData;
}

interface PinNoteAction {
    type: typeof PIN_NOTE;
    payload: NoteData;
}

interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    payload: NoteData;
}

interface EditNoteAction {
    type: typeof EDIT_NOTE;
    payload: NoteData;
}

export type NoteListActionTypes = AddNoteAction | PinNoteAction | DeleteNoteAction | EditNoteAction