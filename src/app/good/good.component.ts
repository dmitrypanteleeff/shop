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
export class GoodComponent implements OnInit, OnDestroy {

  @Input() itemGood: Good = {} as Good;

  @Output() itemGoodEmitter = new EventEmitter<Good>()

  myInterval: any = null;

  addToCard() {
    this.itemGoodEmitter.emit(this.itemGood)
  }

  constructor() { 
    console.log({Good_Constructor: 'constructor'})
  }

  ngOnInit(): void {
    //console.log({Good_onInit: 'On Init'})
    this.myInterval = setInterval(()=> {
      console.log('hello')
    },1000)
  }

  ngOnDestroy(): void {
    console.log({Good_onDestroy: 'On Destroy'})
    clearInterval(this.myInterval);
  }

}
