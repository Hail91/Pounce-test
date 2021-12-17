import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LightsPageRoutingModule } from './lights-routing.module';

import { LightsPage } from './lights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightsPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [LightsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LightsPageModule {}
