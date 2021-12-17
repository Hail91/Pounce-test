import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomPageRoutingModule } from './room-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoomPage } from './room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [RoomPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoomPageModule {}
