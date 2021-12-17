import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomsPageRoutingModule } from './rooms-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoomsPage } from './rooms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomsPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [RoomsPage]
})
export class RoomsPageModule {}
