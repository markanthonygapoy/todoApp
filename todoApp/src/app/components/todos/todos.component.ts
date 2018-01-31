import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
  todoCompleted:number;
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.todoItem = '';
    this.todolist = []; 
    this.todocompleted = false;
    this.checkItems();
    this.todoCompleted = 0;
  }
  addToDo(event){
    if(this.todocompleted){
      this.todochecklist = {
        todoItem: this.todoItem,
        completed:true
    }
    }else{
      this.todochecklist = {
        todoItem: this.todoItem,
        completed:false
    }
    }
  
      console.log('val:',this.todochecklist);
      this.todolist.unshift(this.todochecklist);
      this.todoItem = ''; //reset to blank
      event.preventDefault();
  }

  removeToDo(index){
    this.todolist.splice(index,1);
  }

  markAll(checkstatus){
    if(!checkstatus){
      for(var i = 0; i < this.todolist.length;i++) {
        this.todolist[i].completed = true;
      }
      this.todocompleted = true;
    }else{
      for(var i = 0; i < this.todolist.length;i++) {
        this.todolist[i].completed = false;
      }
      this.todocompleted = false;
    }

  }

  clearCompleted(){
    for(var i = 0; i < this.todolist.length;i++) {
      this.todolist[i].completed = false; //set all as false
    }
  }

  checkItems(){
    let xnum = 0;
    setTimeout(() => {
      for(var i = 0; i < this.todolist.length;i++) {
        if( this.todolist[i].completed == true){
          xnum++;
        }

        
      }
      this.todoCompleted = xnum; // checked items
      this.checkItems();
  
    }, 1000);
  }
  


}
