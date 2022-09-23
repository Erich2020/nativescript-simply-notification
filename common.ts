import { Observable } from '@nativescript/core';

export class SimplyNotificationCommon extends Observable {}

export interface OptionsNotification {
  channelId: string;
  contentText: string;
  titleNotification: string;
  notifyId:number;
  smallIcon?: ETYPE_NOTIFICATION_SMALLICON;
  category?: ETYPE_CATEGORY_NOTIFICATION;
  priority?:ETYPE_PRIORITY;
  autoCancel?:boolean;
  colorSmallIcon?: number;
}

export enum ETYPE_PRIORITY{
    DEFAULT = androidx.core.app.NotificationCompat.PRIORITY_DEFAULT,
    LOW= androidx.core.app.NotificationCompat.PRIORITY_LOW,
    MIN= androidx.core.app.NotificationCompat.PRIORITY_MIN,
    HIGH= androidx.core.app.NotificationCompat.PRIORITY_HIGH,
    MAX= androidx.core.app.NotificationCompat.PRIORITY_MAX,
}

export const TYPE_CATEGORY_NOTIFICATIONS = [
    android.app.Notification.CATEGORY_MESSAGE, 
     android.app.Notification.CATEGORY_ALARM, 
    android.app.Notification.CATEGORY_EMAIL, 
    android.app.Notification.CATEGORY_CALL, 
    android.app.Notification.CATEGORY_SERVICE, 
    android.app.Notification.CATEGORY_SOCIAL 
];

export enum ETYPE_CATEGORY_NOTIFICATION {
  MESSAGE,
  ALARM,
  EMAIL,
  CALL,
  SERVICE,
  SOCIAL
}

export enum ETYPE_NOTIFICATION_SMALLICON {
    CHAT = android.R.drawable.sym_action_chat,
    EMAIL = android.R.drawable.ic_dialog_email,
    ALERT = android.R.drawable.ic_dialog_alert,
    INFO = android.R.drawable.ic_dialog_info,
    ALARM = android.R.drawable.ic_lock_idle_alarm,
    CALL = android.R.drawable.sym_action_call
  }
  