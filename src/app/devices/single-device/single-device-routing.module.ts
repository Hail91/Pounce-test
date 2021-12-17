// Angular Core
import { NgModule } from '@angular/core';

// Angular Router
import { Routes, RouterModule } from '@angular/router';

// Components
import { SingleDevicePage } from './single-device.page';
const routes: Routes = [
  {
    path: '',
    component: SingleDevicePage,
  },
  {
    path: 'lights',
    loadChildren: () =>
      import('../../rooms/room/lights/lights.module').then(
        (m) => m.LightsPageModule
      ),
  },
  {
    path: 'outlets',
    loadChildren: () =>
      import('../../rooms/room/outlets/outlets.module').then(
        (m) => m.OutletsPageModule
      ),
  },
  {
    path: 'temperature',
    loadChildren: () =>
      import('../../rooms/room/temperature/temperature.module').then(
        (m) => m.TemperaturePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleDeviceRoutingModule {}
