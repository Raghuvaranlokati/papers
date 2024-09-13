import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Platform, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// Set up the notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState<Notifications.Notification[]>([]); // To store notifications
  const [displayLimit, setDisplayLimit] = useState(10); // To control pagination
  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const responseListener = useRef<Notifications.Subscription | null>(null);

  useEffect(() => {
    // Load stored notifications from AsyncStorage on app start
    loadStoredNotifications();

    registerForPushNotificationsAsync().then(token => console.log('Expo Push Token:', token));

    // Listener for notifications when app is in foreground
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotifications(prevNotifications => {
        const updatedNotifications = [...prevNotifications, notification];
        debounceStoreNotifications(updatedNotifications);
        return updatedNotifications;
      });
    });

    // Listener for notification responses when the notification is interacted with
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // Cleanup the listeners when the component unmounts
    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  // Load notifications from AsyncStorage
  const loadStoredNotifications = async () => {
    try {
      const storedNotifications = await AsyncStorage.getItem('notifications');
      if (storedNotifications) {
        setNotifications(JSON.parse(storedNotifications));
      }
    } catch (error) {
      console.error('Failed to load notifications from storage', error);
    }
  };

  // Debounce storage function to avoid frequent writes to AsyncStorage
  let timeoutId: NodeJS.Timeout;
  const debounceStoreNotifications = (notificationsToStore: Notifications.Notification[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      storeNotifications(notificationsToStore);
    }, 500);
  };

  // Store notifications to AsyncStorage
  const storeNotifications = async (notificationsToStore: Notifications.Notification[]) => {
    try {
      await AsyncStorage.setItem('notifications', JSON.stringify(notificationsToStore));
    } catch (error) {
      console.error('Failed to save notifications', error);
    }
  };

  // Clear all notifications
  const clearNotifications = async () => {
    try {
      await AsyncStorage.removeItem('notifications'); // Remove from storage
      setNotifications([]); // Clear notifications from state
    } catch (error) {
      console.error('Failed to clear notifications', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {notifications.length > 0 ? (
        <>
          <FlatList
            data={notifications.slice(-displayLimit)} // Paginate by slicing notifications
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.notificationItem}>
                <Text style={styles.notificationTitle}>Title: {item.request.content.title}</Text>
                <Text style={styles.notificationBody}>Body: {item.request.content.body}</Text>
              </View>
            )}
          />
          {/* Show more button for pagination */}
          {notifications.length > displayLimit && (
            <Button title="Show More" onPress={() => setDisplayLimit(displayLimit + 10)} />
          )}
        </>
      ) : (
        <Text>No notifications yet.</Text>
      )}

      {/* Clear Notifications Button */}
      <Button title="Clear Notifications" onPress={clearNotifications} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  notificationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  notificationTitle: {
    fontWeight: 'bold',
  },
  notificationBody: {
    fontSize: 16,
  },
});

export default NotificationScreen;

// Helper function to register for push notifications
async function registerForPushNotificationsAsync(): Promise<string | undefined> {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', token);
  } else {
    Alert.alert('Must use a physical device for Push Notifications');
  }

  return token;
}
