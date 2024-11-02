import { PermissionsAndroid, Platform } from "react-native";

const checkNotificationPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            );
        } catch (error) {
            console.log(error);
        }
    }
};

export { checkNotificationPermission };