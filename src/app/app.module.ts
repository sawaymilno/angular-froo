import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { InMemoryDataService } from './services/InMemoryData/in-memory-data.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import {
  BtnComponent,
  HeadingComponent,
  LogoComponent,
  NavLinkComponent,
  TopRacerCardComponent
} from './atoms'

import {
  NavLinkGroupComponent,
  RacerSearchComponent
} from './molecules'

import {
  MessagesComponent,
  NavbarComponent,
  TableComponent
} from './organisms'

import {
  DashboardComponent,
  RacerDetailComponent,
  RacersComponent,
  ResultsComponent
} from './ecosystems'

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
    HeadingComponent,
    BtnComponent,
    TableComponent
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
