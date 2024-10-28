export interface ToDoData {
    isDone: boolean;
    title: string;
    time: string;
    id: number;
    isStarred: boolean;
    listId: number;
    makeToday?: string | undefined;
    dueDate?: number;
    incremantalId?: number;
    incremantValue?: number;
    repateConfig?: {};
    notificationConfig?: {};
    habitConfig?: {};
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