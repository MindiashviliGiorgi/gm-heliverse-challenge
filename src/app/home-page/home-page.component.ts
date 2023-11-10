import { Component, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  usersData: any;
  userName: any;
  itemsPerPage: number = 20;

  constructor(
    private dataService : DataService,
    private cartService : CartService,
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

  addInTeam(user : any) {
    if (user.domain === 'Finance') {
      this.cartService.addFinance(user)
    } else if (user.domain === 'IT') {
      this.cartService.addIT(user)
    } else if (user.domain === 'Sales') {
      this.cartService.addSale(user)
    } else if (user.domain === 'Marketing') {
      this.cartService.addMarketing(user);
    } else if (user.domain === 'UI Designing') {
      this.cartService.addUi(user);
    } else if (user.domain === 'Business Development') {
      this.cartService.addBusiness(user);
    } else if (user.domain === 'Management') {
      this.cartService.addManagement(user);
    }
  }

  searchDomain: string = '';
  searchGender: string = '';
  searchAvailability: string = '';

  searchDomainChange : EventEmitter<string> = new EventEmitter<string>();
  searchUserDomain() {
    this.searchDomainChange.emit(this.searchDomain)
  }

  searchGenderChange : EventEmitter<string> = new EventEmitter<string>();
  searchUserGender() {
    this.searchGenderChange.emit(this.searchGender)
  }

  searchAvailabilityChange : EventEmitter<string> = new EventEmitter<string>();
  searchUserAvailability() {
    this.searchAvailabilityChange.emit(this.searchAvailability)
  }  

}
