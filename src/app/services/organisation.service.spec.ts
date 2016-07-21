/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { OrganisationService } from './organisation.service';

describe('Organisation Service', () => {
  beforeEachProviders(() => [OrganisationService]);

  it('should ...',
      inject([OrganisationService], (service: OrganisationService) => {
    expect(service).toBeTruthy();
  }));
});
