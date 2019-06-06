import { BrowserModule } from '@angular/platform-browser'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { InMemoryDataService } from './services/InMemoryData/in-memory-data.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// atoms
import {
  BtnComponent,
  HeadingComponent,
  LogoComponent,
  NavLinkComponent,
  TopRacerCardComponent,
  InputComponent,
  DropdownComponent,
  RadioToggleComponent,
  DatepickerComponent
} from './atoms'

// molecules
import {
  NavLinkGroupComponent,
  RacerSearchComponent
} from './molecules'

// organisms
import {
  MessagesComponent,
  NavbarComponent,
  TableComponent,
  QuestionComponent
} from './organisms'

// ecosystems
import {
  DashboardComponent,
  RacerDetailComponent,
  RacersComponent,
  ResultsComponent,
  Froo12Component
} from './ecosystems';

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
    TableComponent,
    Froo12Component,
    InputComponent,
    DropdownComponent,
    RadioToggleComponent,
    QuestionComponent,
    DatepickerComponent,
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
