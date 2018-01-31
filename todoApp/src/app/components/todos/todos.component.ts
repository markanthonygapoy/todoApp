import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoItem:string;
  todolist:any;
  todochecklist:any;
  todocompleted:boolean;

  constructor() { }

  ngOnInit() {
    this.todoItem = '';
    this.todolist = []; 
    this.todocompleted = false;
  }
  addToDo(event){
    this.todochecklist = {
        todoItem: this.todoItem,
        completed:false
    }
      console.log('val:',this.todochecklist);
      this.todolist.unshift(this.todochecklist);
      this.todoItem = ''; //reset to blank
      event.preventDefault();
      // return false;
  }


}
