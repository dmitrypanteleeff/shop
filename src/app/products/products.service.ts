import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      {
        name: 'sega',
        country: 'china',
        image: 'https://ugra.ru/pics-cache3.youla.io/files/images/780_780/5a/fc/5afcb95427a9abda6b41f202.jpg',
        price: 1200
      },
      {
        name: 'dendi',
        country: 'sweden',
        image: 'https://ugra.ru/pics-unidoski.ru/_content/img_board/29/285711.jpg',
        price: 900 
      },
      {
        name: 'gameboy',
        country: 'italy',
        image: 'https://game-cinema.ru/userfiles/shop_item_image_main_list_small/22f3ff1ca0ece324309bc7bb138b8865.jpg',
        price: 700 
      },
      {
        name: 'Electronica',
        country: 'russia',
        image: 'http://voyager.by/wp-content/uploads/2016/11/DSC_3334-300x209.jpg',
        price: 1100 
      }
    ]
  }
}
