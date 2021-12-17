// Angular Core
import { NgModule } from '@angular/core';

// Angular Router
import { Routes, RouterModule } from '@angular/router';

// Components
import { DevicesPage } from './devices.page';
import { SingleDevicePage } from './single-device/single-device.page';
const routes: Routes = [
  {
    path: '',
    component: DevicesPage,
  },
  {
    path: 'lights',
    loadChildren: () =>
      import('../rooms/room/lights/lights.module').then(
        (m) => m.LightsPageModule
      ),
  },
  {
    path: 'outlets',
    loadChildren: () =>
      import('../rooms/room/outlets/outlets.module').then(
        (m) => m.OutletsPageModule
      ),
  },
  {
    path: ':device_id',
    component: SingleDevicePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesPageRoutingModule {}
