import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import * as fromTodoListSelectors from '../reducers/todo-list/todo-list.selectors';

const todoListStorageKey = 'Todo_List';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();

  constructor(private storageService: StorageService, private store:Store<State>) {
    this.retrieveListFromStore();
  }

  retrieveListFromStore() {
    this.store.select(fromTodoListSelectors.getTodoItems).subscribe(value => this.todoListSubject.next(value));
  }

  // saveList(): void {
  //   this.storageService.setData(todoListStorageKey, this.todoList);
  // }

  getTodoList(): Observable<TodoItem[]> {
    return this.todoListSubject.asObservable();
  }

  // addItem(newItem: TodoItem): void {
  //   this.saveList();
  // }

  // updateItem(item: TodoItem, changes: any): void {
  //   const index = this.todoList.indexOf(item);
  //   this.saveList();
  // }

  // deleteItem(item: TodoItem): void {
  //   const index = this.todoList.indexOf(item);
  //   this.saveList();
  // }
}
