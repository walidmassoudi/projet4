import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContenuComponent } from './home/contenu/contenu.component';
import { FooterComponent } from './home/footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { ListTodoComponent } from './todo/list-todo/list-todo.component';
import { StartComponent } from './start/start.component'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './todo/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContenuComponent,
    FooterComponent,
    TodoComponent,
    AddTodoComponent,
    ListTodoComponent,
    StartComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
