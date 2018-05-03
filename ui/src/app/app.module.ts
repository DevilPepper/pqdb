import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NaviComponent } from './component/navi/navi.component';
import { HomeComponent } from './component/home/home.component';
import { CompleteComponent } from './component/complete/complete.component';
import { IncompleteComponent } from './component/incomplete/incomplete.component';

import { TodoInputComponent } from './component/todo-input/todo-input.component';
import { TodoListModule } from './module/todo-list/todo-list.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HomeComponent,
    CompleteComponent,
    IncompleteComponent,
    TodoInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TodoListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
