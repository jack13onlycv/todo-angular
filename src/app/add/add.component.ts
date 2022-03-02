import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../services/http.service';
import { TodoManageService } from '../services/todo-manage.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  @Input() todo!: ITodo;

  constructor(public todoManageService: TodoManageService) {}

  ngOnInit(): void {
  }
}
