export interface Note {
    id: number;
    header: string;
    color: string;
    date: Date;
    isPinned: boolean
}

export interface NoteList {
    noteList: Note[]
}