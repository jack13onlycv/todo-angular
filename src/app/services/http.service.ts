import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INewTodo } from './todo-manage.service';

export interface ITodo {
  title: string;
  completed: boolean;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  addTodo(todo: INewTodo): Observable<ITodo> {
    return this.http.post<ITodo>(
      'https://jsonplaceholder.typicode.com/todos',
      todo,
    );
  }

  fetchTodos(): Observable<ITodo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '5');
    return this.http.get<ITodo[]>(
      'https://jsonplaceholder.typicode.com/todos',
      { params },
    );
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  completeTodo(id: number, complete: boolean): Observable<ITodo> {
    return this.http.patch<ITodo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { completed: complete },
    );
  }

  saveTodo(id: number, title: string): Observable<ITodo> {
    return this.http.patch<ITodo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { title },
    );
  }
}
