import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  good: string = 'sega';
  country: string = 'china';
  src: string = 'https://ugra.ru/pics-cache3.youla.io/files/images/780_780/5a/fc/5afcb95427a9abda6b41f202.jpg';

  good2: string = 'dendi';
  country2: string = 'sweden';
  src2: string = 'https://ugra.ru/pics-unidoski.ru/_content/img_board/29/285711.jpg';

  isDisabled: boolean = false;

  name: string = '';

  handleClick() {
    this.isDisabled = !this.isDisabled;
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
