import { Observable, EventData, Page } from '@nativescript/core';
import { SimplyNotification, OptionsNotification } from '@erichlz/nativescript-simply-notification';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoSharedNativescriptSimplyNotification();
}

export class DemoSharedNativescriptSimplyNotification extends Observable  {

  testIt() {
    const optios:OptionsNotification =  {
      channelId: '001',
      contentText: 'Test Context notification',
      titleNotification: 'Plugin ',
      notifyId: 0
    }
    SimplyNotification.showNotification(optios)
    console.log('test nativescript-simply-notification!');
  }
}