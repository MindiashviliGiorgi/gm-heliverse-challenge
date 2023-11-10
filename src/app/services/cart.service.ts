import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private financeCart: any[] = [];
  private saleCart: any[] = [];
  private marketingCart: any[] = [];
  private itCart: any[] = [];
  private uiCart: any[] = [];
  private businessCart: any[] = [];
  private managementCart: any[] = [];

  // add in carts

  addFinance(user : any) {
    this.financeCart.push(user);
  }
  addSale(user : any) {
    this.saleCart.push(user);
  }
  addMarketing(user : any) {
    this.marketingCart.push(user);
  }
  addIT(user : any) {
    this.itCart.push(user);
  }
  addUi(user : any) {
    this.uiCart.push(user);
  }
  addBusiness(user : any) {
    this.businessCart.push(user);
  }
  addManagement(user : any) {
    this.managementCart.push(user);
  }

  // get carts

  getFinanceCart() {
    return this.financeCart;
  }
  getSaleCart() {
    return this.saleCart;
  }
  getMarketingCart() {
    return this.marketingCart;
  }
  getITCart() {
    return this.itCart;
  }
  getUiCart() {
    return this.uiCart;
  }
  getBusinessCart() {
    return this.businessCart;
  }
  getManagementCart() {
    return this.managementCart;
  }

  
}
