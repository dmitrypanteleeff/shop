import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { Good } from '../types/Good';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { ProductsService } from './products.service';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) {  
  }

  ngOnInit(): void {
    this.goods = this.productsService.getProducts();
  }

  goods: Good[] = []

  isShowing: boolean = false;

  name: string = '';

  cards: Good[] = [

  ]

  handleClick() {
    this.isShowing = !this.isShowing;
  }

  addToCard(itemGood: Good) {
    console.log('dasd')
    console.log(itemGood)
  }



 

  

}
