import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { BubblesComponent } from './bubbles.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: BubblesComponent }])],
  declarations: [BubblesComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class BubblesModule {}


