import { NativescriptSimplyNotificationCommon, OptionsNotification, ETYPE_CATEGORY_NOTIFICATION, ETYPE_NOTIFICATION_SMALLICON, ETYPE_PRIORITY } from './common';
import { Utils } from '@nativescript/core';

export { OptionsNotification, ETYPE_CATEGORY_NOTIFICATION, ETYPE_NOTIFICATION_SMALLICON, ETYPE_PRIORITY };

export declare class SimplyNotification extends SimplyNotificationCommon {
  static showNotification(optionsNotifications: OptionsNotification);
}
