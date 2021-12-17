// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Ionic
import { IonicModule } from '@ionic/angular';

// Custom
import { SingleDeviceRoutingModule } from './single-device-routing.module';
import { SingleDevicePage } from './single-device.page';

// Fonts/Icons/Styles
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleDeviceRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [SingleDevicePage],
})
export class SingleDeviceModule {}
