import { ToDoData, TodoList, TodoLocation } from './models';

export const add_list = 'ADD_LIST';
export const delete_list = 'DELETE_LIST';

export const add_todo = 'ADD_TODO';
export const delete_todo = 'DELETE_TODO';
export const edit_todo = 'EDIT_TODO';
export const star_todo = 'TOGGLE_TODO';
export const change_status_todo = 'CHANGE_STATUS_TODO';

interface AddListAction {
    type: typeof add_list;
    payload: TodoList;
}

interface DeleteListAction {
    type: typeof delete_list;
    id: number;
}

interface ChangeStatusToDoAction {
    type: typeof change_status_todo;
    payload: TodoLocation;
}

interface AddToDoAction {
    type: typeof add_todo;
    payload: ToDoData;
}

interface DeleteToDoAction {
    type: typeof delete_todo;
    payload: {id: number, listId: number};
}

interface EditToDoAction {
    type: typeof edit_todo;
    payload: ToDoData;
}

interface StarToDoAction {
    type: typeof star_todo;
    payload: ToDoData;
}

export type ToDoListActionTypes = AddListAction | DeleteListAction | ChangeStatusToDoAction | AddToDoAction | DeleteToDoAction | EditToDoAction | StarToDoAction