import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { TodosComponent } from './ecosystems/todos/todos.component'
import { ResultsComponent } from './ecosystems/results/results.component'
import { DashboardComponent } from './ecosystems/dashboard/dashboard.component'
import { TodoDetailComponent } from './organisms/todo-detail/todo-detail.component'
import { RacersComponent } from './ecosystems/racers/racers.component'
import { RacerDetailComponent } from './organisms/racer-detail/racer-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: 'racers', component: RacersComponent },
  { path: 'racers/:id', component: RacerDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Similar to react browser router. Listens to location changes
  exports: [RouterModule]
})
export class AppRoutingModule { }
