// authentication.ts
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute} from '@angular/router';



@Injectable()


export class AuthenticationService {
    token: string;

    constructor(private _http: Http, private router: Router) {
        this.token = localStorage.getItem('id_token');
    }

    login(username: String, password: String) {

        let creds =  "grant_type=password&username=" + username + "&password=" + password ;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        return this._http.post('http://api-mercurio.azurewebsites.net/Token', creds, {
            headers: headers
        }).map(this.extractData).catch(this.handleError)      
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    logout() {
        /*
         * If we had a login api, we would have done something like this
    
        return this.http.get(this.config.serverUrl + '/auth/logout', {
          headers: new Headers({
            'x-security-token': this.token
          })
        })
        .map((res : any) => {
          this.token = undefined;
          localStorage.removeItem('token');
        });
         */

        this.token = undefined;
        localStorage.removeItem('id_token');

        //return Observable.of(true);
    }
}