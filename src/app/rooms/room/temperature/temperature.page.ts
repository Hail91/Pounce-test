import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SCU } from 'src/assets/data';
import {
  faThermometerEmpty,
  faThermometerFull,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit {
  public scu = SCU.All();
  public scuID: number;
  public roomID: number;

  public selectedSCU;
  public selectedRoom;

  public isAlerting: boolean;

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params) {
        this.scuID = parseInt(params.scu_id, 10);
        this.roomID = parseInt(params.room_id, 10);
        this.selectedSCU = this.scu.find((s) => s.id === this.scuID);
        if (this.selectedSCU && this.selectedSCU.rooms) {
          this.selectedRoom = this.selectedSCU.rooms.find(
            (r) => r.ID === this.roomID
          );
        }
      }
    });

    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.isAlerting = params.alert === 'true';
      }
    });
  }
}
