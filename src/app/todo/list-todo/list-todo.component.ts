import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
tableTodo: any;
  constructor() {
   }

  ngOnInit() {
   this.tableTodo = JSON.parse(localStorage.getItem('TODO'));
  }

}
