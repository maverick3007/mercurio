import { Component, OnInit, Input } from '@angular/core';

import {TextQuestion } from '../../../model/question-form'

@Component({
  moduleId: module.id,
  selector: 'app-text-field',
  templateUrl: 'text-field.component.html',
  styleUrls: ['text-field.component.css']
})
export class TextFieldComponent implements OnInit {
    @Input() question: TextQuestion;
    @Input() caption: string;
    @Input() hasError: boolean;

  constructor() {}

  ngOnInit() {
  }

}
