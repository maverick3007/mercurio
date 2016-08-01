import { Component } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup } from '@angular/common';
import {Router} from '@angular/router';

import {PopErrorComponent} from "../../modals/pop-error";

@Component({
    selector: 'abs-login-bar',
    templateUrl: 'app/navbars/login-bar/login-bar.component.html',
    directives: [FORM_DIRECTIVES, PopErrorComponent],


})
export class LoginBarComponent {
    form: ControlGroup;
    error: boolean = false;
    errorMessage:string;
    constructor(fb: FormBuilder, public auth: AuthenticationService, public router: Router) {
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(value: any) {
        this.error=false;
        this.auth.login(value.username, value.password).subscribe(
            response => {
                localStorage.setItem('id_token', response.access_token);
                this.router.navigate(['/home']);
            },
            error => {
                let theError = <any>error; 
                this.error = true
                this.errorMessage = "Er liep iets fout. Check uw gebruikersnaam en paswoord en probeer opnieuw."
            },
            () => { console.log('authentication done'); });
    }
}


