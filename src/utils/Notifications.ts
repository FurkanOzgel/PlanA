import PushNotification from "react-native-push-notification";
import { Platform } from "react-native";

class Notifications {
    constructor() {
        PushNotification.configure({
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
            },

            requestPermissions: Platform.OS === 'ios'
        });

        PushNotification.createChannel(
            {
                channelId: 'task-reminder',
                channelName: 'Task Reminder',
            },
            (created) => console.log(`createChannel returned '${created}'`),
        );
    }

    setTaskNotification(title: string, message: string, taskId:number, date: Date) {
        PushNotification.localNotificationSchedule({
            channelId: "task-reminder",
            title: title,
            message: message,
            date: date,
            allowWhileIdle: true,
            id: taskId,
        });
    }
}

export default new Notifications();