export interface TargetData {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    isCompleted : boolean;
    targetValue?: number;
    actualValue?: number;
    targetUnit?: string;
    group: number;
}

export interface TargetGroup {
    id: number;
    name: string;
    targets: TargetData[];
}

export interface TargetState {
    groups: TargetGroup[];
}