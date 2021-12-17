// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Ionic
import { IonicModule } from '@ionic/angular';

// Custom
import { DevicesPageRoutingModule } from './devices-routing.module';
import { DevicesPage } from './devices.page';

// Fonts/Icons/Styles
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicesPageRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [DevicesPage],
})
export class DevicesPageModule {}
