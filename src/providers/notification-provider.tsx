import registerForPushNotificationsAsync from "@/lib/notification";
import { supabase } from "@/lib/supabase";
import * as Notifications from "expo-notifications";
import { PropsWithChildren, useEffect, useState } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);

  const saveUserPushNotificationToken = async (token: string) => {
    if (!token.length) return;

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) return;

    await supabase
      .from("users")
      .update({
        expo_notification_token: token,
      })
      .eq("id", session.user.id);
  };

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => {
        setExpoPushToken(token ?? "");
        saveUserPushNotificationToken(token ?? "");
      })
      .catch((error: any) => setExpoPushToken(`${error}`));

    const notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      },
    );

    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  return <>{children}</>;
};

export default NotificationProvider;
