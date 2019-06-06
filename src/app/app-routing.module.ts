import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import {
  DashboardComponent,
  RacerDetailComponent,
  RacersComponent,
  ResultsComponent,
  Froo12Component
} from './ecosystems'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'racers', component: RacersComponent },
  { path: 'racers/:id', component: RacerDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'froo12', component: Froo12Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Similar to react browser router. Listens to location changes
  exports: [RouterModule]
})
export class AppRoutingModule { }
