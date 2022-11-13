import { Component, OnInit } from '@angular/core';
import { Good } from '../types/Good';
import { Input } from '@angular/core';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  @Input() itemGood: Good = {} as Good;

  constructor() { }

  ngOnInit(): void {
  }

}
