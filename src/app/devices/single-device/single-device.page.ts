// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';
import { Location } from '@angular/common';

// Ionic
import { PopoverController } from '@ionic/angular';

// Components
import { UserPopoverPage } from 'src/components/user.popover';

// RxJS imports
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

// Component Interfaces
export interface DeviceData {
  data: number;
  device: string;
  result: string;
  type: string;
}

export interface DeviceAjaxResponse {
  contactorStatus: DeviceData;
  temperatureStatus: DeviceData;
}

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.page.html',
  styleUrls: ['./single-device.page.scss'],
})
export class SingleDevicePage implements OnInit {
  public contactorStatus: number;
  public temperature: number;
  public deviceId: number;

  constructor(
    public popoverController: PopoverController,
    private dataService: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(map((data) => data))
      .subscribe((data) => (this.deviceId = data.device_id));
    this.fetchDeviceData();
  }

  // Quick fix to route back to prev location
  public goBack(): void {
    return this.location.back();
  }

  // This is repeated all over the place, should build a single nav component and extract logic (no time right now)
  public async showUserMenu(evt) {
    if (!this.popoverController) {
      return;
    }

    const popover = await this.popoverController.create({
      component: UserPopoverPage,
      event: evt,
      translucent: true,
      cssClass: 'popover-select-list',
    });

    await popover.present();
    return await popover.onDidDismiss().then(async (result) => {});
  }

  private fetchDeviceData(): void {
    forkJoin({
      contactorStatus: this.dataService.getDeviceInformation(
        'status',
        this.deviceId
      ),
      temperatureStatus: this.dataService.getDeviceInformation(
        'temperature',
        this.deviceId
      ),
    }).subscribe((result: DeviceAjaxResponse) => {
      this.contactorStatus = result.contactorStatus.data;
      this.temperature = result.temperatureStatus.data;
    });
  }
}
