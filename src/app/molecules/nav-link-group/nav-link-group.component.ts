import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-link-group',
  templateUrl: './nav-link-group.component.html',
  styleUrls: ['./nav-link-group.component.scss']
})
export class NavLinkGroupComponent implements OnInit {
  links = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/racers', name: 'Racers' },
    { path: '/results', name: 'Results' },
    { path: '/froo12', name: 'Froo12' },
  ]
  constructor() {}

  ngOnInit() {}

}
