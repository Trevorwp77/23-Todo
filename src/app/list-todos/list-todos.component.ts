import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date, 
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

todos = [
  new Todo(1, "fold laundry", false, new Date()),
  new Todo(2, "do the dishes", false, new Date()),
  new Todo(3, "vacuum the living room", false, new Date()),
  new Todo(4, "write email to the team", false, new Date()),
    // { id: 1, description: "fold laundry" },
    // { id: 2, description: "do the dishes" },
    // { id: 3, description: "vacuum the living room" },
    // { id: 4, description: "write email to the team" }
  ];
  

  // todo = {
  //   id : 1,
  //   description : "fold laundry"
  // }

}
