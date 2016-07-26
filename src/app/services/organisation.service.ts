import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';


@Injectable()
export class OrganisationService {

    constructor(public http: Http) { };

    //private organisationUrl = 'http://localhost:51796/api/Organisation/';
    private organisationUrl = 'http://api-mercurio.azurewebsites.net/api/Organisation/';

    getOrganisation() {
    //TODO http call
        //return ORGANISATION;

        let authToken = localStorage.getItem('id_token');

        let headers = new Headers();
        headers.append('Authorization', `Bearer ${authToken}`);

        return this.http.get(this.organisationUrl + 'GetOrganisationShort', { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
