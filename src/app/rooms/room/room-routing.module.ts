import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomPage } from './room.page';

const routes: Routes = [
  {
    path: '',
    component: RoomPage
  },
  {
    path: 'lights',
    loadChildren: () => import('./lights/lights.module').then( m => m.LightsPageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./temperature/temperature.module').then( m => m.TemperaturePageModule)
  },
  {
    path: 'outlets',
    loadChildren: () => import('./outlets/outlets.module').then( m => m.OutletsPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomPageRoutingModule {}
