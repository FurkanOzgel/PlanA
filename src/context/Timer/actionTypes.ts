import { TimerSession } from './models';
export const ADD_SESSION = 'ADD_SESSION';
export const DELETE_SESSION = 'DELETE_SESSION';
export const UPDATE_LOGS = 'UPDATE_LOGS';

interface AddSessionAction {
    type: typeof ADD_SESSION;
    payload: TimerSession;
}

interface DeleteSessionAction {
    type: typeof DELETE_SESSION;
    payload: number;
}

interface UpdateLogsAction {
    type: typeof UPDATE_LOGS;
    payload: TimerSession;
}

export type TimerActionTypes = AddSessionAction | DeleteSessionAction | UpdateLogsAction;