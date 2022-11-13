import { Component, OnInit } from '@angular/core';

interface Good {
  good: string,
  country: string,
  image: string
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
      image: 'https://ugra.ru/pics-cache3.youla.io/files/images/780_780/5a/fc/5afcb95427a9abda6b41f202.jpg'
    },
    {
      good: 'dendi',
      country: 'sweden',
      image: 'https://ugra.ru/pics-unidoski.ru/_content/img_board/29/285711.jpg'
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
