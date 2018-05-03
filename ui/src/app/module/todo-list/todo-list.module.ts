import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo/todo.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';

import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TodoComponent,
    TodoHeaderComponent,
    TodoListComponent
  ],
  exports: [TodoListComponent]
})
export class TodoListModule {}
