import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-team-length',
  templateUrl: './team-length.component.html',
  styleUrls: ['./team-length.component.scss']
})
export class TeamLengthComponent {
  teamLength: any;

  constructor(private cartService : CartService) {}

  ngOnInit():void {}

      
  getFinanceCart() {
    return this.cartService.getFinanceCart();
  }
  getSaleCart() {
    return this.cartService.getSaleCart();
  }
  getMarketingCart() {
    return this.cartService.getMarketingCart();
  }
  getITCart() {
    return this.cartService.getITCart();
  }
  getUiCart() {
    return this.cartService.getUiCart();
  }
  getBusinessCart() {
    return this.cartService.getBusinessCart();
  }
  getManagementCart() {
    return this.cartService.getManagementCart();
  }

}
