export interface NoteData {
    id: number;
    title: string;
    note: string;
    color: string;
    date: string;
    isPinned: boolean
}

export interface NoteList {
    noteList: NoteData[]
}