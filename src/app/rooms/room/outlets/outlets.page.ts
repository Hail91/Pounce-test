import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SCU } from 'src/assets/data';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.page.html',
  styleUrls: ['./outlets.page.scss'],
})
export class OutletsPage implements OnInit {

  public scu = SCU.All();
  public scuID: number;
  public roomID: number;

  public selectedSCU;
  public selectedRoom;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params) {
        this.scuID = parseInt(params.scu_id);
        this.roomID = parseInt(params.room_id)
        this.selectedSCU = this.scu.find(s => s.id == this.scuID);
        if (this.selectedSCU && this.selectedSCU.rooms) {
          this.selectedRoom = this.selectedSCU.rooms.find(r => r.ID == this.roomID)
          
        }
      }
    });
}

}
