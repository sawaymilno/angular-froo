import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { HttpClientModule } from '@angular/common/http'
import { InMemoryDataService } from './services/InMemoryData/in-memory-data.service'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ResultsComponent } from './ecosystems/results/results.component'
import { FormsModule } from '@angular/forms'
import { RacerDetailComponent } from './organisms/racer-detail/racer-detail.component'
import { MessagesComponent } from './organisms/messages/messages.component'
import { DashboardComponent } from './ecosystems/dashboard/dashboard.component'
import { NavLinkComponent } from './atoms/nav-link/nav-link.component'
import { LogoComponent } from './atoms/logo/logo.component'
import { NavbarComponent } from './organisms/navbar/navbar.component';
import { NavLinkGroupComponent } from './molecules/nav-link-group/nav-link-group.component';
import { TopRacerCardComponent } from './atoms/top-racer-card/top-racer-card.component';
import { RacersComponent } from './ecosystems/racers/racers.component';
import { RacerSearchComponent } from './molecules/racer-search/racer-search.component';
import { HeadingComponent } from './atoms/heading/heading.component'

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    MessagesComponent,
    DashboardComponent,
    NavLinkComponent,
    LogoComponent,
    NavbarComponent,
    NavLinkGroupComponent,
    TopRacerCardComponent,
    RacersComponent,
    RacerDetailComponent,
    RacerSearchComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
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
