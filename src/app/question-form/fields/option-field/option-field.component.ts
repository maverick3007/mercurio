import { Component, OnInit, Input } from '@angular/core';

import { OptionQuestion} from '../../../model/question-form'

@Component({
  moduleId: module.id,
  selector: 'app-option-field',
  templateUrl: 'option-field.component.html',
  styleUrls: ['option-field.component.css']
})
export class OptionFieldComponent implements OnInit {
    @Input() question: OptionQuestion;
    @Input() caption: string;
    @Input() hasError: boolean;
    @Input() id: string;

  constructor() {}

  ngOnInit() {
  }

}
