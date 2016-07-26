import { Component, OnInit } from '@angular/core';
import {Router, CanActivate, ActivatedRoute} from '@angular/router';
import {isLoggedin}  from '../utilities/is-loggedin';

import {NavBarComponent} from '../navbars/nav-bar'
import {TextFieldComponent} from './fields/text-field/text-field.component';
import {OptionFieldComponent} from './fields/option-field/option-field.component';
import {MultiOptionFieldComponent} from './fields/multi-option-field/multi-option-field.component';
import {UploadFieldComponent} from './fields/upload-field/upload-field.component';
import {IntegerFieldComponent} from './fields/integer-field/integer-field.component';
import {SubformFieldComponent} from './fields/subform-field/subform-field.component';

//services
import {QuestionService} from '../services/question.service';

//model
import {QuestionForm, QuestionFormChapter, QuestionFormChapterSubChapter} from '../model/question-form';

@Component({
  moduleId: module.id,
  selector: 'app-question-form',
  templateUrl: 'question-form.component.html',
  styleUrls: ['question-form.component.css'],
directives: [NavBarComponent, TextFieldComponent, OptionFieldComponent, MultiOptionFieldComponent, UploadFieldComponent, IntegerFieldComponent, SubformFieldComponent],
})
export class QuestionFormComponent implements OnInit {


    constructor(public router: Router,private route: ActivatedRoute, private questionService: QuestionService) { }

    errorMessage: string;
    form: QuestionForm = new QuestionForm();
    selectedChapter: QuestionFormChapter = new QuestionFormChapter();
    isBusy: boolean = false;

    ngOnInit() {

        //this.form = QFORM;
      this.isBusy = true;
      this.getForm();
        
    }

    selectChapter(chapter): void {
        this.selectedChapter = chapter;
    }

    send() {
        let frm = this.form;
        let selectedChapterId = this.selectedChapter.id;
        this.questionService.postForm(frm)
            .subscribe(
            form => this.form = form,
            error => this.errorMessage = <any>error,
            () => {
                this.isBusy = false;
                console.log('done');
                this.selectedChapter = this.form.chapters.find(c => c.id == selectedChapterId);
            });
    }

    resetForm() {
        let selectedChapterId = this.selectedChapter.id;
        
        let id = this.route.snapshot.params['id'];//this.routeParams.get('id');
        this.questionService.getQuestionForm(id)
            .subscribe(
            form => {
                this.form = form;
                this.selectedChapter = this.form.chapters.find(c => c.id == selectedChapterId);
            },
            error => this.errorMessage = <any>error,
            () => { this.isBusy = false; console.log('resetForm done'); });
    }

    getForm() {
        let id = this.route.snapshot.params['id'];//this.routeParams.get('id');
        this.questionService.getQuestionForm(id)
            .subscribe(
            form => {
                this.form = form;
                this.selectedChapter = this.form.chapters[0];
            },
            error => this.errorMessage = <any>error,
            () => { this.isBusy = false; console.log('getForm done'); });
    }

    goBack() {
        this.router.navigate(['\home']);
    }
}
