import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Fetch destination address from LocalStorage if it exists, otherwise default to provided
  public baseUrl =
    localStorage.getItem('api_address') ?? 'http://67.249.230.4/';
  constructor(private http: HttpClient) {}

  // Fetch all devices/locations as a list
  getAllOfType(type: string) {
    return this.http
      .get(`${this.baseUrl}?type=${type}`)
      .pipe(map((res) => res));
  }

  // Get device specific data like temperature/contactor status
  getDeviceInformation(type: string, deviceId: number) {
    return this.http
      .get(`${this.baseUrl}?type=${type}&device=${deviceId}`)
      .pipe(map((res) => res));
  }
}
