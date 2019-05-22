import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { HttpClientModule } from '@angular/common/http'
import { InMemoryDataService } from './services/InMemoryData/in-memory-data.service'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodosComponent } from './ecosystems/todos/todos.component'

import { FormsModule } from '@angular/forms'
import { TodoDetailComponent } from './organisms/todo-detail/todo-detail.component'
import { MessagesComponent } from './organisms/messages/messages.component'
import { DashboardComponent } from './ecosystems/dashboard/dashboard.component'
import { TodoSearchComponent } from './molecules/todo-search/todo-search.component'
import { NavLinkComponent } from './atoms/nav-link/nav-link.component'
import { LogoComponent } from './atoms/logo/logo.component'
import { NavbarComponent } from './organisms/navbar/navbar.component';
import { NavLinkGroupComponent } from './molecules/nav-link-group/nav-link-group.component';
import { ImportantTodoCardComponent } from './atoms/important-todo-card/important-todo-card.component'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TodoSearchComponent,
    NavLinkComponent,
    LogoComponent,
    NavbarComponent,
    NavLinkGroupComponent,
    ImportantTodoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
