import { Injectable } from '@angular/core';
import { Good } from '../types/Good';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<Good> = [];

  constructor() { }

  add(good: Good) {
    //console.log(good)
    this.cart.push(good)
    //console.log(this.cart)
  }

  remove(good: Good) {
    this.cart = this.cart.filter(item => item.name !== good.name);
  }

  get() {
    return this.cart
  }
}
