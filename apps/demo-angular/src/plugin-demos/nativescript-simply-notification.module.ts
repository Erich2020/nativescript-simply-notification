import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSimplyNotificationComponent } from './nativescript-simply-notification.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSimplyNotificationComponent }])],
  declarations: [NativescriptSimplyNotificationComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptSimplyNotificationModule {}
