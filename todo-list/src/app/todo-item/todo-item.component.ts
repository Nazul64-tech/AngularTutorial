import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.item = { title: '' };
  }

  ngOnInit(): void {
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

}
