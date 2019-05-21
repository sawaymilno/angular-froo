import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './services/InMemoryData/in-memory-data.service'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodosComponent } from './ecosystems/todos/todos.component'

import { FormsModule } from '@angular/forms'
import { TodoDetailComponent } from './organisms/todo-detail/todo-detail.component'
import { MessagesComponent } from './organisms/messages/messages.component'
import { DashboardComponent } from './ecosystems/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
