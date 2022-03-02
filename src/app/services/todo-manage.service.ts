/* eslint-disable no-console */
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { HttpService, ITodo } from './http.service';

export interface INewTodo {
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoManageService {
  todos: ITodo[] = [];

  newTodoTitle: string = '';

  constructor(private httpService: HttpService) {}

  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: INewTodo = {
        title: this.newTodoTitle,
        completed: false,
      };

      this.httpService.addTodo(newTodo).subscribe({
        next: (todo) => {
          this.todos.push(todo);
          this.newTodoTitle = '';
        },
        error: (error: HttpErrorResponse) => {
          console.log('Error:', error.message);
        },
      });
    }
  }

  getTodos() {
    this.httpService.fetchTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error:', error.message);
      },
    });
  }

  remove(id: number) {
    this.httpService.removeTodo(id).subscribe({
      next: () => {
        this.todos = this.todos.filter((item) => item.id !== id);
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error:', error.message);
      },
    });
  }

  complete(id: number, complete: boolean) {
    this.httpService.completeTodo(id, complete).subscribe({
      next: () => {
        const completeTodo = this.todos.find((item) => item.id === id);
        if (completeTodo) completeTodo.completed = complete;
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error:', error.message);
      },
    });
  }

  saveTodo(id: number, title: string) {
    this.httpService.saveTodo(id, title).subscribe({
      next: () => {
        const completeTodo = this.todos.find((item) => item.id === id);
        if (completeTodo) completeTodo.title = title;
      },
      error: (error: HttpErrorResponse) => {
        console.log('Error:', error.message);
      },
    });
  }
}
