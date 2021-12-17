import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  async login() {
    this.navCtrl.navigateRoot('locations');
  }

  public onKeydown(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.login();
    }
  }
}
