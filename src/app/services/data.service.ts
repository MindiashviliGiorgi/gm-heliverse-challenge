import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = '/assets/heliverse_mock_data.json';

  constructor(private http : HttpClient) { }

  getAllUsers() {
    return this.http.get(this.jsonUrl);
  }

}
