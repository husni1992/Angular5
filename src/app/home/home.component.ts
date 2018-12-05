import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemCount: Number;
  btnText: String = 'Add Item';
  inputText: String = '';
  todoList: Array<String> = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.todoList.length;
  }

  onkeyPress(event) {
    if (event.charCode === 13) {
      this.addItem();
    }
  }

  addItem() {
    if (this.inputText) {
      this.todoList.push(this.inputText);
      this.itemCount = this.todoList.length;
      this.inputText = '';
    }
  }

}
