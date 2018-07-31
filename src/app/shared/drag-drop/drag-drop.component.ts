import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  droppedData: string;
  constructor() { }

  ngOnInit() {
  }

  dragEnd(event) {
    console.log('Element was dragged', event);
  }
}
