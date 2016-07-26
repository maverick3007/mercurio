import { Component, OnInit, Input } from '@angular/core';

import {TextFieldComponent} from '../text-field/text-field.component';
import {OptionFieldComponent} from '../option-field/option-field.component';
import {MultiOptionFieldComponent} from '../multi-option-field/multi-option-field.component';
import {UploadFieldComponent} from '../upload-field/upload-field.component';
import {IntegerFieldComponent} from '../integer-field/integer-field.component';

import { FormListQuestion, FormListQuestionItem, QuestionFormQuestion} from '../../../model/question-form'

@Component({
  moduleId: module.id,
  selector: 'app-subform-field',
  templateUrl: 'subform-field.component.html',
  styleUrls: ['subform-field.component.css'],
  directives: [ TextFieldComponent, OptionFieldComponent, MultiOptionFieldComponent, UploadFieldComponent, IntegerFieldComponent, SubformFieldComponent],
})
export class SubformFieldComponent implements OnInit {
    @Input() question: FormListQuestion;
    @Input() caption: string;
    @Input() hasError: boolean;
  constructor() {}

  ngOnInit() {
     var test = this.question;
  }

      addLine() {
        var template = this.question.templateQuestions;

        let newQuestionItem: FormListQuestionItem = new FormListQuestionItem();

        newQuestionItem.answers = [];

        for (var _i = 0; _i < template.length; _i++) {
            let newQuestion: QuestionFormQuestion = new QuestionFormQuestion();
            newQuestion.caption = template[_i].caption;
            newQuestion.errorString = template[_i].errorString;
            newQuestion.id = this.guid();//template[_i].id;
            newQuestion.isValid = template[_i].isValid;
            newQuestion.type = template[_i].type;
            newQuestion.formListQuestion = this.copyObject(template[_i].formListQuestion);
            newQuestion.integerQuestion = this.copyObject(template[_i].integerQuestion);
            newQuestion.multiOptionQuestion = this.copyObject(template[_i].multiOptionQuestion);
            newQuestion.optionQuestion = this.copyObject(template[_i].optionQuestion);
            newQuestion.textQuestion = this.copyObject(template[_i].textQuestion);
            newQuestion.uploadQuestion = this.copyObject(template[_i].uploadQuestion);
            newQuestionItem.answers.push(newQuestion);
        }
        

        //newQuestion.answers = template;

        this.question.questions.push(newQuestionItem);
    }

    removeLine(question) {
        var test = question
        var index = this.question.questions.indexOf(question, 0);
        if (index > -1)
        {
            this.question.questions.splice(index, 1);
        }
    }

    private copyObject<T>(object:T): T {
            var objectCopy = <T>{};

            for(var key in object)
        {
        if (object.hasOwnProperty(key)) {
            objectCopy[key] = object[key];
        }
    }

    return objectCopy;
    }

    private guid():string {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

}
