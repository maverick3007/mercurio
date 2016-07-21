import { Component, OnInit } from '@angular/core';
import {Router, CanActivate, ROUTER_DIRECTIVES} from '@angular/router';
import {isLoggedin}  from '../utilities/is-loggedin';


import {NavBarComponent} from '../navbars/nav-bar/nav-bar.component'
import {FormStatusComponent} from './form-status/form-status.component';

import {OrganisationShort} from '../model/organisation-short';

import {OrganisationService} from '../services/organisation.service';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [NavBarComponent, FormStatusComponent]
})


export class HomeComponent implements OnInit, CanActivate {
    constructor(public router: Router, private organisationService: OrganisationService) { }
    mode = 'Observable';
    organisation: OrganisationShort = new OrganisationShort();
    errorMessage: string;
    isBusy: boolean = false;

    canActivate() {
      return isLoggedin();
    }
    ngOnInit() {
        this.isBusy = true;
        this.organisationService.getOrganisation()
            .subscribe(
            organisation => { this.organisation = organisation },
            error => this.errorMessage = <any>error,
            () => { this.isBusy = false; console.log('done'); });
    }

}
