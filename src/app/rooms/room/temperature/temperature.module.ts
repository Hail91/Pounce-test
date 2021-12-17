import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperaturePageRoutingModule } from './temperature-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemperaturePage } from './temperature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperaturePageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [TemperaturePage]
})
export class TemperaturePageModule {}
