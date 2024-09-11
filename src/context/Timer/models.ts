export interface TimerSession {
    id: number;
    seconds: number;
    isPomodoro: boolean;
    startDateTime: string;
    tag: string;
}

export interface TimerLogs {
    timerLogs: TimerSession[]
}