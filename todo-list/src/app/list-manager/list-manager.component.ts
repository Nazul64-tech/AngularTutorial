import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { v4 as uuid } from 'uuid';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import { changeCompletedStatus, deleteTodoItem, setNewItem } from 'src/app/reducers/todo-list/todo-list.actions';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: Observable<TodoItem[]>;

  constructor(private todoListService: TodoListService, private store:Store<State>) { 
    // this.todoList = [{ title: '' }];
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.store.dispatch(setNewItem({item: { _id: uuid(), title: title, completed: false  }}));
    // this.todoListService.addItem({ title });
  }

  removeItem(item: TodoItem): void {
    this.store.dispatch(deleteTodoItem({id: item._id || ''}));
    // this.todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem, changes: any): void {
    this.store.dispatch(changeCompletedStatus({ id: item._id || '', completed: changes }));
    // this.todoListService.updateItem(item, changes);
  }
}
