import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ResultsComponent } from './ecosystems/results/results.component'
import { DashboardComponent } from './ecosystems/dashboard/dashboard.component'
import { RacersComponent } from './ecosystems/racers/racers.component'
import { RacerDetailComponent } from './organisms/racer-detail/racer-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
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
