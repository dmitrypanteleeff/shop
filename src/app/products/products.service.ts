import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      {
        name: 'sega',
        country: 'china',
        image: 'https://xlat8086.com/photo/upload/2021/05/12/20210512212618-0e77983c.jpg',
        price: 1200
      },
      {
        name: 'dendi',
        country: 'sweden',
        image: 'https://attrakcion-vsem.ru/wp-content/uploads/2021/08/dendy.png',
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
