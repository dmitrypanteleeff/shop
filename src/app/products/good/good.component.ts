import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Good } from '../../types/Good';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  @Input() itemGood: Good = {} as Good;

  isInCart: Boolean = false;

  // @Output() itemGoodEmitter = new EventEmitter<Good>()

  constructor(private cartService: CartService) {
    //console.log({Good_Constructor: 'constructor'})
  }

  addToCart() {
    this.cartService.add(this.itemGood);
    this.isInCart = !this.isInCart;
    //this.itemGoodEmitter.emit(this.itemGood)
  }

  removeFromCart() {
    this.cartService.remove(this.itemGood);
    this.isInCart = !this.isInCart;
  }

  ngOnInit(): void {}

}
