import { TimerLogs } from './models';
import { ADD_SESSION, DELETE_SESSION, UPDATE_LOGS, TimerActionTypes} from './actionTypes';

const initialState: TimerLogs = {
    timerLogs: []
};

export function timerReducer(
    state = initialState,
    action: TimerActionTypes,
): TimerLogs {
    switch (action.type) {
        case ADD_SESSION:
            return {
                ...state,
                timerLogs: [...state.timerLogs, { ...action.payload }]
            };

        case DELETE_SESSION:
            const sessionIndexToDelete = state.timerLogs.findIndex(session => session.id == action.payload);
            return {
                ...state,
                timerLogs: state.timerLogs.filter((_, index) => index !== sessionIndexToDelete)
            };

        case UPDATE_LOGS:
            const updatedSessionIndex = state.timerLogs.findIndex(session => session.id === action.payload.id);
            return {
                ...state,
                timerLogs: state.timerLogs.map((session, index) => {
                    if (index === updatedSessionIndex) {
                        return action.payload;
                    }
                    return session;
                })
            };
        default:
        return state;
  }
}