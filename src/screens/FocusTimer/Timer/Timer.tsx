import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';

import styles from './Timer.style';
import {theme} from '../../../styles/theme.style';
import { Switch } from 'react-native-gesture-handler';


function Timer(): React.JSX.Element {

    const [seconds, setSeconds] = useState(0);
    const [isStopwatch, setIsStopwatch] = useState(false);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>();
    const [startSeconds, setStartSeconds] = useState(0);

    useEffect(() => {
        if (!isStopwatch) {
            setSeconds(startSeconds);
        }
        else {
            setSeconds(0);
        }
    }, [isStopwatch]);

    const startStopwatch = () => {
        const id = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        setIntervalId(id);
    };

    const startPomodoro = ({time}: any) => {
        const id = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 0) {
                    clearInterval(id);
                    return prevSeconds;
                }
                return prevSeconds - 1;
            });
        }, 1000);
        setIntervalId(id);
    };

    const stopTimer = () => {
        clearInterval(intervalId);
    };

    const resetTimer = () => {
        if (isStopwatch) {
            setSeconds(0);
        } else {
            setSeconds(startSeconds);
        }
    };

    return(
        <View style={theme.background}>
            <Text style={theme.h1}>{isStopwatch ? "Stopwatch" : "Pomodro"}</Text>
            <Text style={theme.h2}>{seconds}</Text>
            <TextInput style={{backgroundColor: "white"}} placeholder="Enter time in seconds" keyboardType="numeric" onChangeText={(value) => isStopwatch || setStartSeconds(Number(value))}/>
            <Switch value={isStopwatch} onValueChange={() => setIsStopwatch(!isStopwatch)}/>   
            <Button title="Start" onPress={() => {
                if (isStopwatch) {
                    startStopwatch();
                } else {
                    startPomodoro({time: startSeconds});
                }
            }}/>
            <Button title="Stop" onPress={stopTimer}/>
            <Button title="Reset" onPress={resetTimer}/>
        </View>
    );
};

export default Timer;
