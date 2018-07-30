import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-drag',
  templateUrl: './simple-drag.component.html',
  styleUrls: ['./simple-drag.component.css']
})
export class SimpleDragComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }
  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text' );
    ev.target.appendChild(document.getElementById(data));
  }
}
