// question.service.ts

import {Injectable} from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';

import {QuestionForm} from '../model/question-form';


@Injectable()

export class QuestionService {
    constructor(private http: Http) { }

    //private organisationUrl = 'http://localhost:51796/api/Question/';
    private organisationUrl = 'http://api-mercurio.azurewebsites.net/api/Question/';

    postForm(form: QuestionForm) {
        let authToken = localStorage.getItem('id_token');

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${authToken}`);

        let formstring = JSON.stringify(form);

        return this.http.post(this.organisationUrl + 'PostForm', formstring, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    }
    

    getQuestionFormOverview(formId:string) {

        let authToken = localStorage.getItem('id_token');

        let headers = new Headers();
        headers.append('Authorization', `Bearer ${authToken}`);

        return this.http.get(this.organisationUrl + 'GetQuestionFormOverview?Id=' + formId, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);

    }

    getQuestionForm(formId: string) {
        let authToken = localStorage.getItem('id_token');

        let headers = new Headers();
        headers.append('Authorization', `Bearer ${authToken}`);

        return this.http.get(this.organisationUrl + 'GetQuestionForm?Id=' + formId, { headers: headers })
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