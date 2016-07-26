/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SubformFieldComponent } from './subform-field.component';

describe('Component: SubformField', () => {
  it('should create an instance', () => {
    let component = new SubformFieldComponent();
    expect(component).toBeTruthy();
  });
});
