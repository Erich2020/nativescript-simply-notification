import { ApplicationRef, Component, Injector, NgZone } from '@angular/core';
import { Bubbles } from '@erichlz/bubbles';
import { ModalDialogService, NSLocationStrategy, RouterExtensions } from '@nativescript/angular';
import * as app from '@nativescript/core';
import { AbsoluteLayout, Frame, GestureEventData, Image, Label, Page, StackLayout, TouchGestureEventData, ViewEntry } from '@nativescript/core';
import { ScreenMetrics } from '@nativescript/core/platform';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'demo-bubbles',
  templateUrl: 'bubbles.component.html'
})
export class BubblesComponent {
  demoShared: Bubbles;

  constructor(private _ngZone: NgZone, private router: RouterExtensions, location: NSLocationStrategy, zone: NgZone, appRef: ApplicationRef, defaultInjector: Injector) {}

  ngOnInit() {}
  testIt() {
    this.demoShared = new Bubbles();
    this.demoShared.createNotificationChanel();
    this.demoShared.showNotification('Hello', 'World');
  }

  onTapNew() {
    console.log('tap');
    this.callBubbleNotification('TeslaBot', 'World 2');
  }

  show() {}

  createBubbleIntent(namePerson: string, uuid?: string) {
    const contextApp = app.Utils.android.getApplicationContext();
    //const target = new android.content.Intent(contextApp, app.Application.android.foregroundActivity);
    const bubbleIntent = android.app.PendingIntent.getActivity(contextApp, 0, app.Application.android.foregroundActivity, 0);
    const CATEGORY_TEXT_SHARE_TARGET = 'com.example.category.IMG_SHARE_TARGET';
    const chatPerson = this.createPersonBuilder(namePerson, contextApp);
    // Create sharing shortcut
    const shortcutId = this.getShortcutId(uuid);
    const shortcut = new android.content.pm.ShortcutInfo.Builder(contextApp, uuid || shortcutId).setCategories(java.util.Collections.singleton(CATEGORY_TEXT_SHARE_TARGET)).setIntent(new android.content.Intent(android.content.Intent.ACTION_DEFAULT)).setLongLived(true).setShortLabel(chatPerson.getName()).setIcon(android.graphics.drawable.Icon.createWithResource(contextApp, android.R.drawable.sym_def_app_icon));
    return shortcut;
  }

  createPersonBuilder(namePerson: string, contextApp: any) {
    const chatPerson = new android.app.Person.Builder().setName(namePerson).setUri('ssss@sss.ss').setIcon(android.graphics.drawable.Icon.createWithResource(contextApp, android.R.mipmap.sym_def_app_icon)).setImportant(true).setBot(false);
    return chatPerson.build();
  }

  getShortcutId = (uuid?: string) => {
    return uuid || 'Chanel001';
  };

  callBubbleNotification(textTitle: string, textContent: string) {
    const contextApp = app.Utils.android.getApplicationContext();
    const chatPartner = this.createPersonBuilder('Tesla', contextApp);
    // getScManager
    //const scManager = new android.content.pm.ShortcutManager();
    // Create sharing shortcut
    const shortcut = new android.content.pm.ShortcutInfo.Builder(contextApp, this.getShortcutId()).setCategories(java.util.Collections.singleton(android.content.pm.ShortcutInfo.SHORTCUT_CATEGORY_CONVERSATION)).setLongLived(true).setPerson(chatPartner).setShortLabel(chatPartner.getName()).build() as android.content.pm.ShortcutInfo;
    //scManager.createShortcutResultIntent(android.content.Intent.ACTION_CREATE_SHORTCUT)
    const target = new android.content.Intent(contextApp, shortcut.getClass());
    const bubbleIntent = android.app.PendingIntent.getActivity(contextApp, 0, target, 0);
    console.log(this.createwidget());

    const target2 = new android.content.Intent(contextApp, shortcut.getClass());
    const scIntent = android.app.PendingIntent.getActivity(contextApp, 0, target2, 0);
    // Create bubble metadata
    const bubbleData = new android.app.Notification.BubbleMetadata.Builder().setIntent(scIntent).setIcon(android.graphics.drawable.Icon.createWithResource(contextApp, android.R.drawable.sym_def_app_icon)).setDesiredHeight(600).setSuppressNotification(true).setAutoExpandBubble(true);

    // Create notification, referencing the sharing shortcut
    const builder = new android.app.Notification.Builder(contextApp, this.getShortcutId()).setSmallIcon(android.R.drawable.sym_action_chat).setColor(111).setBadgeIconType(2).setContentTitle(textTitle).setContentText(textContent).setCategory(android.app.Notification.CATEGORY_MESSAGE).setAutoCancel(true).setContentIntent(bubbleIntent).setBubbleMetadata(bubbleData.build()).setShortcutId(shortcut.getId()).addPerson(chatPartner);

    const notificationManage = androidx.core.app.NotificationManagerCompat.from(contextApp);
    notificationManage.notify(111, builder.build());
  }

  createwidget() {
    const imageUrl = '~/res/hause.png';
    const stack = new AbsoluteLayout();
    stack.width = 80;
    stack.height = 80;
    stack.borderRadius = 100;
    stack.boxShadow = '2 gray';
    stack.alignSelf = 'center';
    stack.verticalAlignment = 'middle';
    stack.horizontalAlignment = 'center';
    const label = new Image();
    label.src = imageUrl;
    label.borderRadius = 100;
    stack.addChild(label);
    const closed = this.createCloseBubble();
    stack.on(
      'tap',
      (args: GestureEventData) => {
        console.log('touch circle: ', args.eventName);
      },
      this
    );
    stack.on(
      'touch',
      (args: TouchGestureEventData) => {
        const isClosed = from(
          new Promise<boolean>((resolve, reject) => {
            resolve(!(300 >= stack.translateY));
          })
        );
        if (args.action == 'move') {
          const windowManager = app.Utils.android.getApplicationContext().getSystemService(android.content.Context.WINDOW_SERVICE);
          const d = windowManager.getDefaultDisplay();
          const realDisplayMetrics = new android.util.DisplayMetrics();
          d.getRealMetrics(realDisplayMetrics);
          const offset = 20 * realDisplayMetrics.density;
          stack.translateX = stack.translateX + (args.getX() - offset);
          stack.translateY = stack.translateY + (args.getY() - offset);
        }
        
        if (args.action == 'down') {
          app.Application.getRootView()._addView(closed);
        }

        if (args.action == 'up') {
          app.Application.getRootView()._removeView(closed);
          isClosed.subscribe((val) => {
            if (val) {
              app.Application.getRootView()._removeView(stack);
            }
          });
        }
      },
      this
    );
    app.Application.getRootView()._addView(stack);

    return stack;
  }

  createCloseBubble() {
    const imageUrl = '~/res/hause.png';
    const absolute = new AbsoluteLayout();
    absolute.height = 80;
    absolute.borderRadius = 100;
    absolute.boxShadow = '2 gray';
    absolute.alignSelf = 'center';
    absolute.verticalAlignment = 'bottom';
    absolute.horizontalAlignment = 'center';
    const label = new Image();
    label.src = imageUrl;
    label.borderRadius = 100;
    absolute.addChild(label);
    return absolute;
  }
}
