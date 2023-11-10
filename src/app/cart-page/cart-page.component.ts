import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  financeList: any;
  salesList: any;
  marketingList: any;
  itList: any;
  uiList: any;
  businessList: any;
  managementList: any;

  constructor(private cartService : CartService) {}

  ngOnInit(): void {
    this.financeList = this.cartService.getFinanceCart();
    this.salesList = this.cartService.getSaleCart();
    this.marketingList = this.cartService.getMarketingCart();
    this.uiList = this.cartService.getUiCart();
    this.itList = this.cartService.getITCart();
    this.businessList = this.cartService.getBusinessCart();
    this.managementList = this.cartService.getManagementCart();
  }

}
