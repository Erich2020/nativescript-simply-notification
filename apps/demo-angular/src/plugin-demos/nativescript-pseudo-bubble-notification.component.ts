import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPseudoBubbleNotification } from '@demo/shared';
import { } from '@erichlz/nativescript-pseudo-bubble-notification';

@Component({
	selector: 'demo-nativescript-pseudo-bubble-notification',
	templateUrl: 'nativescript-pseudo-bubble-notification.component.html',
})
export class NativescriptPseudoBubbleNotificationComponent {
  
  demoShared: DemoSharedNativescriptPseudoBubbleNotification;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptPseudoBubbleNotification();
  }

}