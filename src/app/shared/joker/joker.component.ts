import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.css']
})
export class JokerComponent implements OnInit {
myForm = new FormGroup({
  user: new FormControl(''), pass: new FormControl(''),
  address: new FormGroup({
    city: new FormControl('')
  })
});
  constructor() { }

  ngOnInit() {
  }
  submitForm() {
    console.log(this.myForm);
    
  }
}
