import { Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {FILE_UPLOAD_DIRECTIVES, FileUploader, FileUploaderOptions} from 'ng2-file-upload/ng2-file-upload';

import {UploadQuestion} from '../../../model/question-form';

import {DownloadService} from '../../../services/download.service';

//const URL = 'http://localhost:51796/api/Upload/PostFile';
const URL = 'http://api-mercurio.azurewebsites.net/api/Upload/PostFile';

@Component({
  moduleId: module.id,
  selector: 'app-upload-field',
  templateUrl: 'upload-field.component.html',
  styleUrls: ['upload-field.component.css'],
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [DownloadService]
})
export class UploadFieldComponent implements OnInit {
    @Input() id: string;
    @Input() question: UploadQuestion;
    @Input() caption: string;

    constructor(private downloadService: DownloadService) { }

    public uploader: FileUploader;
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;
    public selectedImageFile: string = "";
    errorMessage: string;



    ngOnInit() {
        let authToken = localStorage.getItem('id_token');
        this.uploader = new FileUploader({ url: URL + "?id=" + this.id });
        this.uploader.authToken = `Bearer ${authToken}`;
        this.uploader.onAfterAddingFile = (fileItem) => {
            fileItem.upload();
        }
        this.uploader.onErrorItem = (fileItem) => {
            alert("er liep iets mis met de upload");
            this.selectedImageFile = "";
            this.ngOnInit();

        }
        this.uploader.onSuccessItem = (fileItem) => {
            this.question.fileName = fileItem.some.name;
        }

    }

    test() {
        var hasFile = this.question.fileName != '';


    }

    clearFile() {
        this.question.fileName = null;
    }

    download() {
        this.downloadService.downloadFile(this.id, this.question.fileName);

        ////For future use 

        //let thefile = {};
        //this.downloadService.getFile(this.id, this.question.fileName).subscribe(
        //    (response) => {
        //        var test = response.headers._headersMap.get('Content-Type');;
        //        var mediaType = test[0];
        //        var blob = new Blob([response._body], { type: mediaType });
        //        saveAs(blob, this.question.fileName, true);
        //    },
        //    error => this.errorMessage = <any>error,
        //    () => { console.log('downloaded'); }
        //)
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

}
