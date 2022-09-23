# @erichlz/nativescript-simply-notification

```javascript
ns plugin add @erichlz/nativescript-simply-notification
```

## Usage
import { OptionsNotification, SimplyNotification } from '@erichlz/nativescript-simply-notification';


const optios: OptionsNotification = {
      channelId: '001',
      contentText: 'Test Context notification',
      titleNotification: 'Plugin ',
      notifyId: 0
    };

SimplyNotification.showNotification(optios);

About Options Notification

    channelId: string;
    contentText: string;
    titleNotification: string;
    notifyId:number;
    smallIcon?: ETYPE_NOTIFICATION_SMALLICON;
    category?: ETYPE_CATEGORY_NOTIFICATION;
    priority?:ETYPE_PRIORITY;
    autoCancel?:boolean;
    colorSmallIcon?: number;


## License

Apache License Version 2.0
