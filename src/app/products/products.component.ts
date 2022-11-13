import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

interface Good {
  good: string,
  country: string,
  image: string,
  price: number
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  goods: Good[] = [
    {
      good: 'sega',
      country: 'china',
      image: 'https://ugra.ru/pics-cache3.youla.io/files/images/780_780/5a/fc/5afcb95427a9abda6b41f202.jpg',
      price: 1200
    },
    {
      good: 'dendi',
      country: 'sweden',
      image: 'https://ugra.ru/pics-unidoski.ru/_content/img_board/29/285711.jpg',
      price: 900 
    },
  ]

  isShowing: boolean = false;

  name: string = '';

  handleClick() {
    this.isShowing = !this.isShowing;
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
