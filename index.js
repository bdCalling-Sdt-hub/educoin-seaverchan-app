/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppRoutes from './src/routes/AppRoutes';

import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

// example 
// {
//   title: 'Notification Title',
//   body: 'Main body content of the notification',
//   android: {
//     channelId,
//     sound: 'hollow',
//     autoCancel: false, 
//     // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
//     // pressAction is needed if you want the notification to open the app when pressed
//     pressAction: {
//       id: 'default',
      
//     },
//   },
// }

export async function onDisplayNotification(data) {
    // Request permissions (required for iOS)
    await notifee.requestPermission()
  
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
    name: 'default',
    sound: 'default',
    });
  
    // Display a notification
    await notifee.displayNotification({
      title: data?.title,
        body: data?.body,
        android: {
          channelId,
          sound: 'hollow',
          autoCancel: false, 
          // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
            
          },
        },
    });
  }
  
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
//     await notifee.displayNotification({
//         title: remoteMessage.notification?.title,
//         body: remoteMessage.notification?.body,
//         android: {
//           channelId: 'default',
//         },
//       });
//   });
  
notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;
  
    if (type === EventType.ACTION_PRESS && pressAction?.id === 'default') {
      console.log('User pressed the notification in the background');
    //   onDisplayNotification()
    }
  });

  notifee.onForegroundEvent(({ type, detail }) => {
    switch (type) {
      case EventType.DISMISSED:
        console.log('User dismissed notification', detail.notification);
        break;
      case EventType.PRESS:
        console.log('User pressed notification', detail.notification);
        break;
    }
  });
  

AppRegistry.registerComponent(appName, () => AppRoutes);
