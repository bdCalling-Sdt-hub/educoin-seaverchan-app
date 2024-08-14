
interface IPushNotification {
  title: string,
  body: string,
  android: {
    channelId : string,
    sound: 'default',
    autoCancel: boolean, 
    // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
    // pressAction is needed if you want the notification to open the app when pressed
    pressAction: {
      id: 'default',
      
    },
  },
}