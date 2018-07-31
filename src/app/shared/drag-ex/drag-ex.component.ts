import { Component, OnInit } from '@angular/core';
import {Model} from '../../model';

@Component({
  selector: 'app-drag-ex',
  templateUrl: './drag-ex.component.html',
  styleUrls: ['./drag-ex.component.css']
})
export class DragExComponent implements OnInit {
  img  = 'assets/monkey.jpg';
  transferData: Model[] = [{images: ''}];
  receivedData: Model[] = [{images: ''}];

  transferDataSuccess($event: any) {
    this.receivedData.push($event.dragData);
    setTimeout(() => {
      this.transferData.splice(0 , 1);
      console.log(this.receivedData);
    }, 2000);
  }
  constructor() {
    this.receivedData = [];
    this.transferData = [{images: this.img}, {images: this.img}, {images: this.img}];
    console.log(this.transferData);
  }

  ngOnInit() {
  }

}
