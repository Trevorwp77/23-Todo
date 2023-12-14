import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

todos = [
    { id: 1, description: "fold laundry" },
    { id: 2, description: "do the dishes" },
    { id: 3, description: "vacuum the living room" },
    { id: 4, description: "write email to the team" }
  ];
  

  // todo = {
  //   id : 1,
  //   description : "fold laundry"
  // }

}
