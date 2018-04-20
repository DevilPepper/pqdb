import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { HomeComponent } from './home/home.component';
import { CompleteComponent } from './complete/complete.component';
import { IncompleteComponent } from './incomplete/incomplete.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HomeComponent,
    CompleteComponent,
    IncompleteComponent,
    TodoInputComponent,
    TodoComponent,
    TodoListComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
