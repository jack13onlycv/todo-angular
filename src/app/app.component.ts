import { Component, OnInit } from '@angular/core';
import { TodoManageService } from './services/todo-manage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public todoManageService: TodoManageService) {

  }

  ngOnInit(): void {
    this.todoManageService.getTodos();
  }
}
