import { Component } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  template: `
    <ion-list>
      <ion-item-group>
        <ion-item
          lines="none"
          (click)="redirectHome($event)"
          style="cursor: pointer;"
        >
          <ion-icon name="home"></ion-icon>&nbsp; Home
        </ion-item>

        <ion-item
          lines="none"
          (click)="redirectToAppSettings($event)"
          style="cursor: pointer;"
        >
          <ion-icon name="settings-outline"></ion-icon>&nbsp; Settings
        </ion-item>
      </ion-item-group>

      <ion-item-group>
        <ion-item-divider style="min-height:0"></ion-item-divider>
        <ion-item
          lines="none"
          (click)="logout($event)"
          style="cursor: pointer;"
        >
          <ion-icon name="log-out-outline"></ion-icon>&nbsp;
          <ion-label>Logout</ion-label>
        </ion-item>
      </ion-item-group>
    </ion-list>
  `,
})
export class UserPopoverPage {
  constructor(
    public popCtrl: PopoverController,
    public navCtrl: NavController,
    private router: Router
  ) {}

  public close(evt, nav?: string) {
    this.popCtrl.dismiss({
      event: evt,
      nav: nav,
    });
  }

  public logout(evt) {
    this.navCtrl.navigateRoot('/login');
    this.popCtrl.dismiss({
      event: evt,
      loggout: true,
    });
  }

  public redirectHome($evt) {
    this.router.navigate(['/locations']);
    this.close($evt);
  }

  public redirectToAppSettings($evt) {
    this.router.navigate(['/settings']);
    this.close($evt);
  }
}
