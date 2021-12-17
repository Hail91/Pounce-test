import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPopoverPage } from './user.popover';

@NgModule({
  imports: [CommonModule],
  declarations: [UserPopoverPage],
  exports: [UserPopoverPage],
  entryComponents: [UserPopoverPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
