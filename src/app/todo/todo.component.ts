import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../services/http.service';
import { TodoManageService } from '../services/todo-manage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: ITodo;

  editing: boolean = false;

  editedTitle: string;

  constructor(public todoManageService: TodoManageService) {

  }

  ngOnInit(): void {

  }

  editTitle() {
    this.editing = true;
    this.editedTitle = this.todo.title;
  }

  saveTitle() {
    if (this.editedTitle.trim()) {
      this.todoManageService.saveTodo(this.todo.id, this.editedTitle);
    }
    this.editing = false;
  }
}
