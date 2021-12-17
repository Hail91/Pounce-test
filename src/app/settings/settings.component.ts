import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  public apiAddress = '';
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('api_address')) {
      this.apiAddress = localStorage.getItem('api_address');
    }
  }

  onChange(event) {
    this.apiAddress = event.target.value;
  }

  // Temporary
  saveDataToStorage() {
    localStorage.setItem('api_address', this.apiAddress);
    // Revert back to home
    this.router.navigate(['/locations']);
  }
}
