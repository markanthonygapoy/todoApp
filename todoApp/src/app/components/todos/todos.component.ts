import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todolist:any[];
  completedlist:any[];

  constructor() { }

  ngOnInit() {

    this.todolist = ['Start this','Next item'];
    this.completedlist = [];

 
  }
  addToDo(tdlist){
      console.log('val:',tdlist);
      this.todolist.unshift(tdlist);
      return false;
  }


}
