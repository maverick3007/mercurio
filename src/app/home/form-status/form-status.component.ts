import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

import {FormShort} from '../../model/form-short';

@Component({
  moduleId: module.id,
  selector: 'app-form-status',
  templateUrl: 'form-status.component.html',
  styleUrls: ['form-status.component.css']
})
export class FormStatusComponent implements OnInit {
  @Input()
    formShort: FormShort;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navToQuestions(form) {
        //this.router.navigate(['/QuestionFormChapter', { id: form.formId }]);
    }

}
