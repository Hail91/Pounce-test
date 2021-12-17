// Angular/Ionic Core
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

// Components
import { UserPopoverPage } from 'src/components/user.popover';

// Service Imports
import { ApiService } from '../API/api.service';

// Old
import { SCU } from 'src/assets/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public requestType = 'locations';
  // Old
  public scu = SCU.All();

  public locations: Array<string> = [];

  constructor(
    public popoverController: PopoverController,
    private dataService: ApiService
  ) {}

  ngOnInit(): void {
    this.fetchData();
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

  private fetchData(): void {
    this.dataService.getAllOfType(this.requestType).subscribe((data: any) => {
      this.locations = data.data;
    });
  }
}
