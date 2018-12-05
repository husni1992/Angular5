import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goalsAnimater', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query('enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), { optional: true })
      ])
    ])
  ]
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


  removeItem(index) {
    this.todoList.splice(index, 1)
  }

}
