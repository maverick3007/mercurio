import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {OrganisationShort} from '../../model/organisation-short';

import {AuthenticationService} from '../../services/authentication.service'
import {OrganisationService} from '../../services/organisation.service';

@Component({
  moduleId: module.id,
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  constructor(public auth: AuthenticationService, private organisationService: OrganisationService, private router: Router) {}
  organisation: OrganisationShort = new OrganisationShort();
  ngOnInit() {
            this.organisationService.getOrganisation()
            .subscribe(
            organisation => { this.organisation = organisation },
            () => { console.log('header organistation-name done'); });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
