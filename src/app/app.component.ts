import { Component } from '@angular/core';
import {Model} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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


}
