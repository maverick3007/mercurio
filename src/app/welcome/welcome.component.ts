import { Component, OnInit } from '@angular/core';

import { LoginBarComponent} from '../navbars/login-bar/login-bar.component';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css'],
  directives: [LoginBarComponent],
})
export class WelcomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
