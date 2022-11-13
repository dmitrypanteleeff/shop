import { 
  Component, 
  OnInit, 
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Good } from '../types/Good';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  @Input() itemGood: Good = {} as Good;

  @Output() itemGoodEmitter = new EventEmitter<Good>()

  addToCard() {
    this.itemGoodEmitter.emit(this.itemGood)
  }

  constructor() { 
    console.log({Good_Constructor: 'constructor'})
  }

  ngOnInit(): void {}

}
