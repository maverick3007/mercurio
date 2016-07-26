import { Component, OnInit, Input } from '@angular/core';

import { IntegerQuestion} from '../../../model/question-form'

@Component({
  moduleId: module.id,
  selector: 'app-integer-field',
  templateUrl: 'integer-field.component.html',
  styleUrls: ['integer-field.component.css']
})
export class IntegerFieldComponent implements OnInit {
    @Input() question: IntegerQuestion;
    @Input() caption: string;
    @Input() hasError: boolean;

  constructor() {}

  ngOnInit() {
  }

}
