import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Students } from './student';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  private baseurl = 'http://localhost:3000';

  getStudents() {
    return this.http.get(`${this.baseurl}/Students`);
  }
}
