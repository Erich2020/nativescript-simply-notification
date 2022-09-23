import { SimplyNotificationCommon, 
  OptionsNotification, 
  ETYPE_CATEGORY_NOTIFICATION, 
  ETYPE_NOTIFICATION_SMALLICON, 
  ETYPE_PRIORITY, TYPE_CATEGORY_NOTIFICATIONS} from './common';
import { Application, Utils } from '@nativescript/core';

export { OptionsNotification, ETYPE_CATEGORY_NOTIFICATION,ETYPE_NOTIFICATION_SMALLICON,ETYPE_PRIORITY };

export class SimplyNotification extends SimplyNotificationCommon {
  
  static showNotification(optionsNotifications:OptionsNotification) {
    const contextApp = Utils.android.getApplicationContext();
    this.createNotificationChanel(optionsNotifications.titleNotification, optionsNotifications.contentText, optionsNotifications.channelId);
    const target2 = new android.content.Intent(contextApp, Application.android.nativeApp.getClass());
    const scIntent = android.app.PendingIntent.getActivity(contextApp, 0, target2, 0);

    const builder = new androidx.core.app.NotificationCompat.Builder(contextApp, optionsNotifications.channelId)
      .setSmallIcon(optionsNotifications.smallIcon || ETYPE_NOTIFICATION_SMALLICON.INFO)
      .setColor(optionsNotifications.colorSmallIcon || 0)
      .setBadgeIconType(1)
      .setContentTitle(optionsNotifications.titleNotification)
      .setContentText(optionsNotifications.contentText)
      .setCategory(TYPE_CATEGORY_NOTIFICATIONS[optionsNotifications.category] || TYPE_CATEGORY_NOTIFICATIONS[0])
      .setPriority(optionsNotifications.priority || ETYPE_PRIORITY.DEFAULT)
      .setAutoCancel(optionsNotifications.autoCancel || true)
      .setContentIntent(scIntent);
    const notificationManage = androidx.core.app.NotificationManagerCompat.from(contextApp);
    notificationManage.notify(optionsNotifications.notifyId, builder.build());
  }

  private static createNotificationChanel(name:string, description:string, channelId:string) {
    const contextApp = Utils.android.getApplicationContext();
      const importance = androidx.core.app.NotificationManagerCompat.IMPORTANCE_DEFAULT;
      const notificationChanel = new android.app.NotificationChannel(channelId, name, importance);
      notificationChanel.setDescription(description);
      notificationChanel.setAllowBubbles(true)
      const notificationManager = <android.app.NotificationManager>contextApp.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
      notificationManager.createNotificationChannel(notificationChanel);
  }

}
