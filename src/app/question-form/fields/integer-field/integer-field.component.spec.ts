/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { IntegerFieldComponent } from './integer-field.component';

describe('Component: IntegerField', () => {
  it('should create an instance', () => {
    let component = new IntegerFieldComponent();
    expect(component).toBeTruthy();
  });
});
