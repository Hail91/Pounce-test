// Core Angular/Router
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Ionic
import { PopoverController } from '@ionic/angular';

// Components
import { UserPopoverPage } from 'src/components/user.popover';

// RxJS imports
import { map } from 'rxjs/operators';

// Services
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {
  public devices: Array<string>;
  public locationId: string;
  public locationName: string;

  constructor(
    public popoverController: PopoverController,
    private dataService: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Get location ID from route
    this.route.params
      .pipe(map((data) => data))
      .subscribe((data) => (this.locationId = data.location_id));
    // Fetch device data for selected location
    this.getDevices();
  }

  public goBack(): void {
    return this.location.back();
  }

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

  private getDevices(): void {
    // Fetch data from LocalStorage (Use of LS is temporary, should refactor to service)
    const devicesInStorage = localStorage.getItem('devices');
    const locationIdInStorage = localStorage.getItem('locationId');
    // If data in storage is valid
    if (devicesInStorage && locationIdInStorage === this.locationId) {
      // Parse and set to state
      this.devices = JSON.parse(devicesInStorage);
    } else {
      // otherwise, grab device data and location from browser history object
      this.devices = history.state.data.devices;
      this.locationId = history.state.data.locationId;
      // Then save to LocalStorage
      localStorage.setItem('devices', JSON.stringify(this.devices));
      localStorage.setItem('locationId', JSON.stringify(this.locationId));
    }
  }
}
