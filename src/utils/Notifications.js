import PushNotification from "react-native-push-notification";

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
                channelId: 'default-channel-id',
                channelName: 'Default Channel Name'
            }
        );
    }

    scheduleNotification(title, message, date) {
        PushNotification.localNotificationSchedule({
            channelId: "deneme",
            title: title,
            message: message,
            date: date,
        });
    }

    localNotification(title, message) {
        PushNotification.localNotification({
            channelId: "default-channel-id",
            title: title,
            message: message,
        });
    }
}

export default new Notifications();