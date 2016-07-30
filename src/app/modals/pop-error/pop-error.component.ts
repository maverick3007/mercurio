import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  moduleId: module.id,
  selector: 'app-pop-error',
  templateUrl: 'pop-error.component.html',
  styleUrls: ['pop-error.component.css'],
  directives:[MODAL_DIRECTIVES]
})
export class PopErrorComponent implements OnInit {
  _isOpen: boolean;

  @ViewChild('modal')
  modal: ModalComponent;

  @Input()
  message: string = "";

  @Input()
  set isOpen(isOpen: boolean) {
    this._isOpen = isOpen;
    if (isOpen) {
      this.modal.open();
    }
  }
  get isOpen() { return this._isOpen; }

  
  constructor() {}

  ngOnInit() {
  }

}
