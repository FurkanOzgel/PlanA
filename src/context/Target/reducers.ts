import { TargetState } from './models';
import { TargetActionTypes, ADD_TARGET, ADD_GROUP, DELETE_GROUP, DELETE_TARGET, UPDATE_TARGET_STATUS, UPDATE_TARGET_VALUE } from './actionTypes';

const initialState: TargetState = {
    groups: []
};

export function targetStateReducer(
    state = initialState,
    action: TargetActionTypes,
): TargetState {
    switch (action.type) {
        case ADD_TARGET:
            return {
                ...state,
                groups: state.groups.map(group => {
                    if (group.id === action.payload.group) {
                        return {
                            ...group,
                            targets: [...group.targets, action.payload]
                        }
                    }
                    return group;
                })
            }
        case ADD_GROUP:
            return {
                ...state,
                groups: [...state.groups, action.payload]
            }
        case UPDATE_TARGET_VALUE:
            return {
                ...state,
                groups: state.groups.map(group => {
                    return {
                        ...group,
                        targets: group.targets.map(target => {
                            if (target.id === action.payload.id) {
                                return {
                                    ...target,
                                    actualValue: action.payload.value
                                }
                            }
                            return target;
                        })
                    }
                })
            }
        case DELETE_TARGET:
            return {
                ...state,
                groups: state.groups.map(group => {
                    return {
                        ...group,
                        targets: group.targets.filter(target => target.id !== action.payload)
                    }
                })
            }
        
        case DELETE_GROUP:
            return {
                ...state,
                groups: state.groups.filter(group => group.id !== action.payload)
            }
        
        case UPDATE_TARGET_STATUS:
            return {
                ...state,
                groups: state.groups.map(group => {
                    return {
                        ...group,
                        targets: group.targets.map(target => {
                            if (target.id === action.payload.id) {
                                return {
                                    ...target,
                                    isCompleted: action.payload.status
                                }
                            }
                            return target;
                        })
                    }
                })
            }
        default:
        return state;
  }
}