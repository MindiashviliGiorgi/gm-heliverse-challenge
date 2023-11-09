import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  usersData: any;

  constructor(
    private dataService : DataService,
  ) {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.dataService.getAllUsers()
    .subscribe((data) => {
      this.usersData = data;
    })
  }

}
