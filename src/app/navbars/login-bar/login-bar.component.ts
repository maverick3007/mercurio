import { Component } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup } from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'abs-login-bar',
    templateUrl: 'app/navbars/login-bar/login-bar.component.html',
    directives: [FORM_DIRECTIVES],


})
export class LoginBarComponent {
    form: ControlGroup;
    error: boolean = false;
    constructor(fb: FormBuilder, public auth: AuthenticationService, public router: Router) {
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(value: any) {
        this.auth.login(value.username, value.password)
    }
}

