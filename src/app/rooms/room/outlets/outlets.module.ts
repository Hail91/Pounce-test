import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OutletsPageRoutingModule } from './outlets-routing.module';

import { OutletsPage } from './outlets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutletsPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [OutletsPage]
})
export class OutletsPageModule {}
