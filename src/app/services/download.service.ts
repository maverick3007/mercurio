

import {Injectable, provide} from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Http, Response, Headers, BrowserXhr} from '@angular/http';
import {CustomBrowserXhr} from '../utilities/custom.xhr';




@Injectable()
export class DownloadService {

  constructor(private http: Http) {}

      //private organisationUrl = 'http://localhost:51796/api/Upload/';
    private organisationUrl = 'http://api-mercurio.azurewebsites.net/api/Upload/';

        public downloadFile(questionId: string, fileName: string) {

        let authToken = localStorage.getItem('id_token');
        var reportPost = 'variable=lsdkjf';

        var xhr = new XMLHttpRequest();

        xhr.open("GET", this.organisationUrl + 'GetFile?QuestionId=' + questionId + '&FileName=' + fileName, true);
        xhr.responseType = 'blob';
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", `Bearer ${authToken}`);
        xhr.onreadystatechange = function () {//Call a function when the state changes.
            if (xhr.readyState == 4 && xhr.status == 200) {
                var blob = new Blob([this.response], { type: this.response.type });
                saveAs(blob, fileName);
            }
        }

        xhr.send(reportPost);
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
