import { createSelector } from '@ngrx/store';
import { TodoListState } from 'src/app/reducers/todo-list/todo-list.reducers';
import { State } from 'src/app/reducers/index';

export const getRootState = (state: State) => state.todoList;

export const getTodoItems = createSelector(
  getRootState,
  (state: TodoListState) => state.items
);
