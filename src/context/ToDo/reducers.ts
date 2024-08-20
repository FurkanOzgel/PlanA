import { TodoLists } from "./models";
import { ToDoListActionTypes, add_list, delete_list, add_todo, delete_todo, edit_todo, star_todo } from "./actionTypes";

const initialState: TodoLists = {
    todoLists: []
};

export function todoListReducer(
    state = initialState,
    action: ToDoListActionTypes,
): TodoLists {
    switch (action.type) {
        case add_todo:
            return {
                ...state,
                todoLists: state.todoLists.map((todoList) => {
                    if (todoList.id === action.payload.listId) {
                        return {
                            ...todoList,
                            tasks: [...todoList.tasks, action.payload]
                        };
                    }
                    return todoList;
                })
            };
        case delete_todo:
            return {
                ...state,
                todoLists: state.todoLists.map((todoList) => {
                    if (todoList.id === action.payload.listId) {
                        return {
                            ...todoList,
                            tasks: todoList.tasks.filter((task) => task.id !== action.payload.id)
                        };
                    }
                    return todoList;
                })
            };
            
        case edit_todo:
            return {
                ...state,
                todoLists: state.todoLists.map((todoList) => {
                    if (todoList.id === action.payload.listId) {
                        return {
                            ...todoList,
                            tasks: todoList.tasks.map((task) => {
                                if (task.id === action.payload.id) {
                                    return {
                                        ...task,
                                        title: action.payload.title,
                                        time: action.payload.time
                                    };
                                }
                                return task;
                            })
                        };
                    }
                    return todoList;
                })     
            }

        case star_todo:
            return {
                ...state,
                todoLists: state.todoLists.map((todoList) => {
                    if (todoList.id === action.payload.listId) {
                        return {
                            ...todoList,
                            tasks: todoList.tasks.map((task) => {
                                if (task.id === action.payload.id) {
                                    return {
                                        ...task,
                                        isStarred: !task.isStarred
                                    };
                                }
                                return task;
                            })
                        };
                    }
                    return todoList;
                })
            };

        case add_list:
            return {
                ...state,
                todoLists: [...state.todoLists, action.payload]
            };

        case delete_list:
            return {
                ...state,
                todoLists: state.todoLists.filter((todoList) => todoList.id !== action.id)
            };

        default:
        return state;
    }
}