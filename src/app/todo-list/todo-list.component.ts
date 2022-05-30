import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit  {
 todos: any[];
  filteredTodos: any[];
  count:number;
  constructor() {
    this.todos = [];
    this.filteredTodos = [];
    this.count = 0
  }

  ngOnInit(): void {
  }

  add(event:any){
    if(!event.value) return;
    this.todos.push({id: this.todos.length, name: event.value})
    this.filteredTodos = this.todos;
    event.value= "";
    this.count++;
  }

  delete(id:number){
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.filteredTodos = this.todos;
  }

  like(str:string){
    this.filteredTodos = this.todos.filter(todo => todo.name.includes(str));
  }

}
