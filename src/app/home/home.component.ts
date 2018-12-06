import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('.3s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  itemCount: Number;
  btnText: String = 'Add Item';
  inputText: String = '';
  todoList: Array<String> = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => {
      this.todoList = res;
    });
    this.itemCount = this.todoList.length;
  }

  onkeyPress(event) {
    if (event.charCode === 13 && this.inputText) {
      this.addItem();
    }
  }

  addItem() {
    if (this.inputText) {
      this.todoList.push(this.inputText);
      this._data.changeGoal(this.todoList);
      this.itemCount = this.todoList.length;
      this.inputText = '';
    }
  }


  removeItem(index) {
    this.todoList.splice(index, 1)
    this._data.changeGoal(this.todoList);
  }

}
