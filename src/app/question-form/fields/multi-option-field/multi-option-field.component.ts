import { Component, OnInit, Input } from '@angular/core';

import { MultiOptionQuestion} from '../../../model/question-form'

@Component({
  moduleId: module.id,
  selector: 'app-multi-option-field',
  templateUrl: 'multi-option-field.component.html',
  styleUrls: ['multi-option-field.component.css']
})
export class MultiOptionFieldComponent implements OnInit {
    @Input() question: MultiOptionQuestion;
    @Input() caption: string;
    @Input() hasError: boolean;
    @Input() id: string;

  constructor() {}

  ngOnInit() {
  }

 checkSelected(o) : boolean{
    if (this.question.selectedOptions != null){
        if (this.question.selectedOptions.indexOf(o) > -1) {
            return true;
        }
    }
    return false;
  }

  toggleSelection(o : string) {
      if (this.question.selectedOptions != null) {
          if (this.question.selectedOptions.indexOf(o) > -1) {
              this.question.selectedOptions.splice(this.question.selectedOptions.indexOf(o),1);
          } else {
              this.question.selectedOptions.push(o);
          }
      } else {
          this.question.selectedOptions = [];
          this.question.selectedOptions.push(o);
      }
  }

}
