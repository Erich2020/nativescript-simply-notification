import { Component, NgZone } from '@angular/core';
import { OptionsNotification, SimplyNotification } from '@erichlz/nativescript-simply-notification';

@Component({
  selector: 'demo-nativescript-simply-notification',
  templateUrl: 'nativescript-simply-notification.component.html'
})
export class NativescriptSimplyNotificationComponent {
  constructor(private _ngZone: NgZone) {}

  ngOnInit() {}
  testIt() {
    const optios: OptionsNotification = {
      channelId: '001',
      contentText: 'Test Context notification',
      titleNotification: 'Plugin ',
      notifyId: 0
    };
    SimplyNotification.showNotification(optios);
    console.log('test nativescript-simply-notification!');
  }
}
