import { TargetData, TargetGroup } from './models';
export const ADD_TARGET = 'ADD_TARGET';
export const ADD_GROUP = 'ADD_GROUP';
export const UPDATE_TARGET_VALUE = 'UPDATE_TARGET_VALUE';
export const DELETE_TARGET = 'DELETE_TARGET';
export const DELETE_GROUP = 'DELETE_GROUP';
export const UPDATE_TARGET_STATUS = 'UPDATE_TARGET_STATUS';


interface AddTargetAction {
    type: typeof ADD_TARGET;
    payload: TargetData;
}

interface AddGroupAction {
    type: typeof ADD_GROUP;
    payload: TargetGroup;
}

interface UpdateTargetValueAction {
    type: typeof UPDATE_TARGET_VALUE;
    payload: { id: number, value: number };
}

interface DeleteTargetAction {
    type: typeof DELETE_TARGET;
    payload: number;
}

interface DeleteGroupAction {
    type: typeof DELETE_GROUP;
    payload: number;
}

interface UpdateTargetStatusAction {
    type: typeof UPDATE_TARGET_STATUS;
    payload: { id: number, status: boolean };
}


export type TargetActionTypes = AddTargetAction | AddGroupAction | UpdateTargetValueAction | DeleteTargetAction | DeleteGroupAction | UpdateTargetStatusAction;