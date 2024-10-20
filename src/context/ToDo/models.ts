export interface ToDoData {
    isDone: boolean;
    title: string;
    time: string;
    id: number;
    isStarred: boolean;
    listId: number;
}

export interface TodoList {
    name: string;
    id: number;
    color: string;
    icon: string;
    tasks: ToDoData[];
    isDefault?: boolean;
}

export interface TodoLists { 
    todoLists: TodoList[];
}

export interface TodoLocation {
    listId: number;
    taskId: number;
}