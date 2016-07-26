/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MultiOptionFieldComponent } from './multi-option-field.component';

describe('Component: MultiOptionField', () => {
  it('should create an instance', () => {
    let component = new MultiOptionFieldComponent();
    expect(component).toBeTruthy();
  });
});
