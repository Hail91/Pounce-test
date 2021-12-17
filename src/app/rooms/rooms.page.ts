import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SCU } from 'src/assets/data';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  public i = {
    faExclamationTriangle: faExclamationTriangle,
  };
  public scu = SCU.All();
  public scuID: number;
  public selectedSCU;
  public rooms;

  public data;
  constructor(public route: ActivatedRoute, private dataService: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params) {
        this.scuID = parseInt(params.scu_id, 10);
        this.selectedSCU = this.scu.find((s) => s.id == this.scuID);
        if (this.selectedSCU && this.selectedSCU.rooms) {
          this.rooms = this.selectedSCU.rooms;
        }
      }
    });
  }
}
